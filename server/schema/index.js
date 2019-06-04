import { gql } from 'apollo-server-express';
export default gql`
 type Query{
  topics:[Topic]
  getUser(username:String!):User
  articles:[Article]
  getArticle(article_id:ID!):Article
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

 type Treasure{
  treasure_id: ID,
  treasure_name: String,
  colour: String,
  age: Int,
  cost_at_auction: String,
  shop_id: ID,
 }
 
`