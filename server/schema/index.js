import { gql } from 'apollo-server-express';
export default gql`
 type Query{
  topics:[Topic]
  getUser(username:String!):User
  articles:[Article]
  getArticle(article_id:ID!):Article
  comments:[Comment]
  getComment(comment_id:ID!):Comment
 }
 
type Topic{
  slug:String!
  description:String 
  articles:[Article]
 }
 
 type User{
  username:String!
  name: String,
  avatar_url: String,
  articles:[Article],
  comments:[Comment]
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

 type Comment{
  comment_id: ID,
  body: String,
  votes: Int,
  article_id:ID
  author:String,
  created_at:String,
 }
 
`