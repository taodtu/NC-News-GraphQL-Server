const connection = require("../../db/connection");

const fetchUser = async (username) => await
  connection.select('users.*').count({ comment_count: 'comment_id' })
    .count({ article_count: 'articles.article_id' })
    .from('users').where({ username })
    .leftJoin('comments', 'comments.author', '=', 'users.username')
    .leftJoin('articles', 'articles.author', '=', 'users.username')
    .groupBy('users.username').returning('*')
    .first();


const fetchArticlesByUser = async (author) => await connection
  .select('articles.*')
  .count({ comment_count: 'comment_id' })
  .from('articles')
  .where({ "articles.author": author })
  .leftJoin('comments', 'comments.article_id', '=', 'articles.article_id')
  .groupBy('articles.article_id')
  .returning('*');

const articleCount = async (username) => {
  const count = await
    connection.count({ article_count: 'article_id' })
      .from('users').where({ username })
      .leftJoin('articles', 'articles.author', '=', 'users.username')
      .groupBy('users.username').returning('*').first()
  return count.article_count
};

const fetchCommentsByUser = async (author) => await connection
  .select('*')
  .from('comments')
  .where({ author })
  .returning('*');

export {
  fetchUser,
  fetchArticlesByUser,
  fetchCommentsByUser,
  articleCount
}