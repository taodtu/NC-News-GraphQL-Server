const connection = require("../../db/connection");

const fetchUsers = async () => await connection.select('*').from('users');

const fetchUser = async (username) => await
  connection.select('*')
    .from('users').where({ username })
    .first();


const fetchArticlesByUser = async (author, offset, limit, sort_by, order) => await connection
  .select('articles.*')
  .count({ comment_count: 'comment_id' })
  .from('articles')
  .where({ "articles.author": author })
  .leftJoin('comments', 'comments.article_id', '=', 'articles.article_id')
  .groupBy('articles.article_id')
  .limit(limit)
  .offset(offset)
  .orderBy(sort_by, order);

const articleCount = async (username) => {
  const count = await
    connection.count({ article_count: 'article_id' })
      .from('users').where({ username })
      .leftJoin('articles', 'articles.author', '=', 'users.username')
      .groupBy('users.username').returning('*').first()
  return count.article_count
};

const commentCount = async (username) => {
  const count = await
    connection.count({ comment_count: 'comment_id' })
      .from('users').where({ username })
      .leftJoin('comments', 'comments.author', '=', 'users.username')
      .groupBy('users.username').returning('*').first()
  return count.comment_count
};
const fetchCommentsByUser = async (author) => await connection
  .select('*')
  .from('comments')
  .where({ author })
  .returning('*');

module.exports = {
  fetchUsers,
  fetchUser,
  fetchArticlesByUser,
  fetchCommentsByUser,
  articleCount,
  commentCount
}