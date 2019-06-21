exports.articlesResolvers = {
 Query: {
  articles: (parent, { cursor, limit = 10, sort_by = "created_at", order = "desc" }, { models }) => models.fetchArticles({ cursor, limit, sort_by, order }),

  getArticle: (parent, { article_id }, { models }) => models.fetchArticleByID(article_id),
  articlesByAuthor: (parent, { username }, { models }) => models.fetchArticlesByUser(username),
  articlesByTopic: (parent, { topic }, { models }) => models.fetchArticlesByTopic(topic),
 },
 Article: {
  user: (parent, args, { models }) => models.fetchUserByArticle(parent.article_id),
  comments: (parent, args, { models }) => models.fetchCommentsByArticle(parent.article_id)
 },
 Mutation: {
  updateArticle: (parent, { article_id, inc_votes }, { models }) => models.updateArticleByID(article_id, inc_votes),
 },
}