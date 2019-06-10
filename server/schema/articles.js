import { gql } from 'apollo-server-express';
export default gql`
 extend type Query{
  articles(cursor:String, limit:Int, sort_by:String,order:String):ArticleConnection!
  getArticle(article_id:ID!):Article
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