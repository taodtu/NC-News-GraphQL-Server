const { gql } = require('apollo-server-express');

exports.topicsSchema = gql`
 extend type Query{
  topics:[Topic]
 }
 
type Topic{
  slug:String!
  description:String 
  articles:[Article]
  article_count:Int
  comment_count:Int
 }
`


