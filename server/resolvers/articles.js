export default {
 Query: {
  articles: (parent, args, { models }) => models.fetchArticles(),
  getArticle: (parent, { article_id }, { models }) => models.fetchArticleByID(article_id),

 },
 Article: {
  comments: (parent, args, { models }) => models.fetchCommentsByArticle(parent.article_id)
 },

}