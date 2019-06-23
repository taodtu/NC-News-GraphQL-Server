const connection = require("../../db/connection");

const fetchArticles = async ({ cursor, limit, sort_by, order }) => {
  let newLimit = limit + 1;
  const articles = await connection
    .select('articles.*')
    .count({ comment_count: 'comment_id' })
    .from('articles')
    .leftJoin('comments', 'comments.article_id', '=', 'articles.article_id')
    .groupBy('articles.article_id')
    .modify(query => {
      if (cursor) query.where("articles.created_at", "<", cursor);
    })
    .limit(newLimit)
    .orderBy(sort_by, order);
  const hasNextPage = articles.length > limit;
  const edges = hasNextPage ? articles.slice(0, -1) : articles;

  return {
    edges,
    pageInfo: {
      hasNextPage,
      endCursor: articles[articles.length - 1].created_at
    }
  }
}

const fetchArticleByID = async (article_id) => await
  connection
    .select('articles.*')
    .count({ comment_count: 'comment_id' })
    .from('articles')
    .where({ "articles.article_id": article_id })
    .leftJoin('comments', 'comments.article_id', '=', 'articles.article_id')
    .groupBy('articles.article_id')
    .returning('*').first();

const fetchCommentsByArticle = async (article_id, limit, sort_by, order) => await connection
  .select('*')
  .from('comments')
  .where({ article_id })
  .limit(limit)
  .orderBy(sort_by, order);

const fetchUserByArticle = async (article_id) => {
  const { author } = await connection
    .select('author')
    .from('articles')
    .where({ article_id })
    .first();
  return await connection
    .select('*')
    .from('users')
    .where({ username: author })
    .first();
}

const updateArticleByID = async (article_id, inc_votes) => {
  const res = await connection
    .select('*')
    .from('articles')
    .where({ article_id: article_id })
    .increment('votes', inc_votes)
    .returning('*')
  return res[0]
}

module.exports = {
  fetchArticles,
  fetchArticleByID,
  fetchCommentsByArticle,
  fetchUserByArticle,
  updateArticleByID
}