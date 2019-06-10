exports.topicsResolvers = {
 Query: {
  topics: (parent, args, { models }) => models.fetchTopics(),

 },

 Topic: {
  articles: (parent, args, { models }) => models.fetchArticlesByTopic(parent.slug),
  comment_count: (parent, args, { models }) => models.countComments(parent.slug),
 },

}

