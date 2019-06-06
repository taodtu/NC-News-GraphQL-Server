export default {
 Query: {
  topics: (parent, args, { models }) => models.fetchTopics(),
  getUser: (parent, { username }, { models }) => models.fetchUser(username),
  articles: (parent, args, { models }) => models.fetchArticles(),
  getArticle: (parent, { article_id }, { models }) => models.fetchArticleByID(article_id),
  comments: (parent, { sort_by, order }, { models }) => models.fetchComments(sort_by, order),
  getComment: (parent, { comment_id }, { models }) => models.fetchCommentByID(comment_id),
 },
 Mutation: {
  createComment: (parent, { body, author }, { models }) => models.insertComment(body, author),
 },
 Topic: {
  articles: (parent, args, { models }) => models.fetchArticlesByTopic(parent.slug),
  comment_count: (parent, args, { models }) => models.countComments(parent.slug),
 },
 User: {
  articles: (parent, args, { models }) => models.fetchArticlesByUser(parent.username),
  comments: (parent, args, { models }) => models.fetchCommentsByUser(parent.username),
  // article_count: (parent, args, { models }) => models.articleCount(parent.username)
 },
 Article: {
  comments: (parent, args, { models }) => models.fetchCommentsByArticle(parent.article_id)
 },

}