import cors from 'cors';
import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import dbConfig from '../knexfile'
const connection = require('knex')(dbConfig);
import schema from './schema';
import resolvers from './resolvers';
import models from './models';

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

