const { gql } = require('apollo-server-express');
exports.articlesSchema = gql`
 extend type Query{
  articles(cursor:String, limit:Int, sort_by:String,order:String):ArticleConnection!
  getArticle(article_id:ID!):Article
 }

 extend type Mutation{
  updateArticle(article_id:ID!, inc_votes:Int!):Article!
}

 type ArticleConnection {
  edges: [Article]!
  pageInfo:PageInfo!
 }

 type PageInfo{
  endCursor:Date!
  hasNextPage:Boolean!
 }

 type Article{
  article_id: ID,
  title: String,
  body: String,
  votes: Int,
  topic: String,
  author:String,
  created_at:Date,
  user:User,
  comment_count:Int,
  comments:[Comment]
 }

`