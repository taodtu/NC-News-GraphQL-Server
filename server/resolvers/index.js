import { GraphQLDateTime } from 'graphql-iso-date';
import usersResolvers from './users';
import topicsResolvers from './topics';
import articlesResolvers from './articles';
import commentsResolvers from './comments';

const customScalarResolver = {
 Date: GraphQLDateTime,
}

module.exports = { resolvers: [usersResolvers, topicsResolvers, articlesResolvers, commentsResolvers, customScalarResolver] }