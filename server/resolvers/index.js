
export default {
 Query: {
  topics: (parent, args, { models }) => models.fetchTopics()
 },
 Topic: {
  articles: (parent, args, { models }) => models.fetchArticlesByTopic(parent.slug)
 }

}