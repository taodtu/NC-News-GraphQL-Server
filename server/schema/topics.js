import { gql } from 'apollo-server-express';

export default gql`
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


