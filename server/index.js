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

server.applyMiddleware({ app, path: '/graphql' });

app.listen({ port: 8000 }, () => {
 console.log('Apollo Server on http://localhost:8000/graphql');
});

