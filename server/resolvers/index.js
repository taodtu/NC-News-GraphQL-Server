
export default {
 Query: {
  topics: (parent, args, { models }) => models.fetchTopics(),
  getUser: (parent, { username }, { models }) => models.fetchUser(username),
 },
 Topic: {
  articles: (parent, args, { models }) => models.fetchArticlesByTopic(parent.slug)
 },
 User: {
  articles: (parent, args, { models }) => models.fetchArticlesByUser(parent.username),
  comments: (parent, args, { models }) => models.fetchArticlesByUser(parent.username)
 }

}