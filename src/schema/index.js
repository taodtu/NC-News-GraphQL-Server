import { gql } from 'apollo-server-express';
export default gql`
 type Query{
  topics:[Topic]
  users:[User]
  articles:[Article]
  getArticle(article_id:ID!):Article
 }
 
type Owner{
  owner_id:ID!
  forename:String 
  surname:String 
  age: Int,
  shops:[Shop],
  shop_count:Int,
  stock_value:Float
 }
 
 type Shop{
  shop_id:ID
  shop_name: String,
  owner_id: ID,
  slogan: String,
  treasures:[Treasure],
  shop_owner:String,
  stock_value:Float
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