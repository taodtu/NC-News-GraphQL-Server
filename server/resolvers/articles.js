exports.articlesResolvers = {
 Query: {
  articles: (parent, { cursor, limit = 10, sort_by = "created_at", order = "desc" }, { models }) => models.fetchArticles({ cursor, limit, sort_by, order }),

  getArticle: (parent, { article_id }, { models }) => models.fetchArticleByID(article_id),

  articlesByAuthor: (parent, { username, limit = null, sort_by = "created_at", order = "desc" }, { models }) => models.fetchArticlesByUser(username, limit, sort_by, order),

  articlesByTopic: (parent, { topic, limit = null, sort_by = "created_at", order = "desc" }, { models }) => models.fetchArticlesByTopic(topic, limit, sort_by, order),
 },
 Article: {
  user: (parent, args, { models }) => models.fetchUserByArticle(parent.article_id),
  comments: (parent, { limit = null, sort_by = "created_at", order = "asc" }, { models }) => models.fetchCommentsByArticle(parent.article_id, limit, sort_by, order)
 },
 Mutation: {
  updateArticle: (parent, { article_id, inc_votes }, { models }) => models.updateArticleByID(article_id, inc_votes),
 },
}