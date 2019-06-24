const cors = require('cors');
const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const connection = require('../db/connection');
const { schema } = require('./schema');
const { resolvers } = require('./resolvers');
const { models } = require('./models');

connection.seed.run()

const app = express();
app.use(express.json())
app.use(cors());

const server = new ApolloServer({
 typeDefs: schema,
 resolvers,
 context: {
  models
 }
});

app.get('/', (req, res, next) => {
 res.status(200).send({ msg: "welcome to the nc-news-graphql api by Tao Li! to consume this api, please go to https://nc-news-graphql-server.herokuapp.com/graphql, and refer to https://github.com/taodtu/NC-News-GraphQL-Server/tree/master/server/schema" });
});

// app.get('/graphql', (req, res, next) => {
//  res.status(200).send({ msg: "welcome to the nc-news-graphql api by Tao Li! to consume this api, please go to https://nc-news-graphql-server.herokuapp.com/graphql, and refer to https://github.com/taodtu/NC-News-GraphQL-Server/tree/master/server/schema" });
// });

server.applyMiddleware({ app, path: '/graphql' }); //when deploy at heroku needs to add graphql to the path

app.listen({ port: process.env.PORT || 8000 }, () => {
 console.log(`🚀 Server ready at http://localhost:8000/graphql`);
});



