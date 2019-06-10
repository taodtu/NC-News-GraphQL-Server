const { fetchTopics, fetchArticlesByTopic, countComments } = require('./topics');
const { fetchUser, fetchArticlesByUser, fetchCommentsByUser, articleCount } = require('./users');
const { fetchArticles, fetchArticleByID, fetchCommentsByArticle, fetchUserByArticle } = require('./articles');
const { fetchComments, fetchCommentByID, insertComment, deleteComment, updateCommentByID } = require('./comments');

module.exports = {
 models: {
  fetchTopics, fetchArticlesByTopic, countComments, fetchUser, fetchArticlesByUser, articleCount,
  fetchCommentsByUser, fetchArticles, fetchArticleByID, fetchCommentsByArticle, fetchUserByArticle, fetchComments,
  fetchCommentByID, insertComment, deleteComment, updateCommentByID
 }
};