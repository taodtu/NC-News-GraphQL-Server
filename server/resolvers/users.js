exports.usersResolvers = {
 Query: {
  getUser: (parent, { username }, { models }) => models.fetchUser(username),
  users: (parent, args, { models }) => models.fetchUsers(),
 },
 User: {
  articles: (parent, args, { models }) => models.fetchArticlesByUser(parent.username),
  comments: (parent, args, { models }) => models.fetchCommentsByUser(parent.username),
  article_count: (parent, args, { models }) => models.articleCount(parent.username),
  comment_count: (parent, args, { models }) => models.commentCount(parent.username)
 },
}