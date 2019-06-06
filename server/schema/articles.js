import { gql } from 'apollo-server-express';
export default gql`
 extend type Query{
  articles(cursor:String, limit:Int, sort_by:String,order:String):[Article]
  getArticle(article_id:ID!):Article
 }

 type Article{
  article_id: ID,
  title: String,
  body: String,
  votes: Int,
  topic: String,
  author:String,
  created_at:Date,
  comment_count:Int,
  comments:[Comment]
 }

`