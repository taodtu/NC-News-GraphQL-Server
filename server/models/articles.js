const connection = require("../../db/connection");

const fetchArticles = async ({ cursor, limit, sort_by, order }) => {
  return await connection
    .select('articles.*')
    .count({ comment_count: 'comment_id' })
    .from('articles')
    .leftJoin('comments', 'comments.article_id', '=', 'articles.article_id')
    .groupBy('articles.article_id')
    .modify(query => {
      if (cursor) query.where("articles.created_at", "<", cursor);
    })
    .limit(limit)
    .orderBy(sort_by, order)
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

const fetchCommentsByArticle = async (article_id) => await connection
  .select('*')
  .from('comments')
  .where({ article_id })
  .returning('*');

export {
  fetchArticles,
  fetchArticleByID,
  fetchCommentsByArticle
}