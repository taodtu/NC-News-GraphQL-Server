
export default {
 Query: {
  topics: (parent, args, { models }) => models.fetchTopics(),
  getUser: (parent, { username }, { models }) => models.fetchUser(username),
  articles: (parent, args, { models }) => models.fetchArticles(),
  getArticle: (parent, { article_id }, { models }) => models.fetchArticleByID(article_id),
  comments: (parent, args, { models }) => models.fetchComments(),
  getComment: (parent, { comment_id }, { models }) => models.fetchCommentByID(comment_id),
 },
 Topic: {
  articles: (parent, args, { models }) => models.fetchArticlesByTopic(parent.slug)
 },
 User: {
  articles: (parent, args, { models }) => models.fetchArticlesByUser(parent.username),
  comments: (parent, args, { models }) => models.fetchCommentsByUser(parent.username)
 },
 Article: {
  comments: (parent, args, { models }) => models.fetchCommentsByArticle(parent.article_id)
 },

}