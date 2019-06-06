import { gql } from 'apollo-server-express';
export default gql`
 extend type Query{
  getUser(username:String!):User
 }
 
 type User{
  username:String!
  name: String,
  avatar_url: String,
  articles:[Article],
  comments:[Comment],
  article_count:Int,
  comment_count:Int
 }
`