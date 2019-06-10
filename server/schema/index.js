const { gql } = require('apollo-server-express');

const { usersSchema } = require('./users');
const { topicsSchema } = require('./topics');
const { articlesSchema } = require('./articles');
const { commentsSchema } = require('./comments');

const linkSchema = gql`

  scalar Date

  type Query {
    _: Boolean
  }
  type Mutation {
    _: Boolean
  }
  type Subscription {
    _: Boolean
  }
`;

exports.schema = [linkSchema, usersSchema, topicsSchema, articlesSchema, commentsSchema];