import { gql } from 'apollo-server-express';

export default gql`
 extend type Query{
  comments(sort_by:String, order:String):[Comment]
  getComment(comment_id:ID!):Comment
 }
 
extend type Mutation{
  createComment(body:String! author:String!):Comment!
  deleteComment(comment_id:ID!):Boolean!
}

 type Comment{
  comment_id: ID,
  body: String,
  votes: Int,
  article_id:ID
  author:String,
  created_at:Date,
 }
 
`