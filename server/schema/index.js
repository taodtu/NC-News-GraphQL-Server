import { gql } from 'apollo-server-express';

import usersSchema from './users';
import topicsSchema from './topics';
import articlesSchema from './articles';
import commentsSchema from './comments';

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

export default [linkSchema, usersSchema, topicsSchema, articlesSchema, commentsSchema];