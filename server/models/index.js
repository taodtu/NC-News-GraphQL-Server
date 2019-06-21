const { fetchTopics, fetchArticlesByTopic, countComments } = require('./topics');
const { fetchUsers, fetchUser, fetchArticlesByUser, fetchCommentsByUser, articleCount, commentCount } = require('./users');
const { fetchArticles, fetchArticleByID, fetchCommentsByArticle, fetchUserByArticle, updateArticleByID } = require('./articles');
const { fetchComments, fetchCommentByID, insertComment, deleteComment, updateCommentByID } = require('./comments');

module.exports = {
 models: {
  fetchTopics, fetchArticlesByTopic, countComments, fetchUsers, fetchUser, fetchArticlesByUser, articleCount, commentCount, fetchCommentsByUser, fetchArticles, fetchArticleByID, fetchCommentsByArticle, fetchUserByArticle, updateArticleByID, fetchComments,
  fetchCommentByID, insertComment, deleteComment, updateCommentByID
 }
};