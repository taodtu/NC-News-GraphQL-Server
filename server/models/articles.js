const connection = require("../../db/connection");

const fetchArticles = async () => await connection
 .select('articles.*')
 .count({ comment_count: 'comment_id' })
 .from('articles')
 .where({ "articles.article_id": article_id })
 .leftJoin('comments', 'comments.article_id', '=', 'articles.article_id')
 .groupBy('articles.article_id')
 .returning('*');

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