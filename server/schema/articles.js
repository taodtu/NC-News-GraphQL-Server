import { gql } from 'apollo-server-express';
export default gql`
 extend type Query{
  articles:[Article]
  getArticle(article_id:ID!):Article
 }

 type Article{
  article_id: ID,
  title: String,
  body: String,
  votes: Int,
  topic: String,
  author:String,
  created_at:String,
  comment_count:Int,
  comments:[Comment]
 }

`