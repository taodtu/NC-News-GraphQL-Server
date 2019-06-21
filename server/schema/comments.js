const { gql } = require('apollo-server-express');

exports.commentsSchema = gql`
 extend type Query{
  comments(sort_by:String, order:String):[Comment]
  getComment(comment_id:ID!):Comment
 }
 
extend type Mutation{
  createComment(body:String! username:String! article_id:ID!):Comment!
  deleteComment(comment_id:ID!):Boolean!
  updateComment(comment_id:ID!, inc_votes:Int!):Comment!
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