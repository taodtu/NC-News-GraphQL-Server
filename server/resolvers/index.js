const { GraphQLDateTime } = require('graphql-iso-date');
const { usersResolvers } = require('./users');
const { topicsResolvers } = require('./topics');
const { articlesResolvers } = require('./articles');
const { commentsResolvers } = require('./comments');

const customScalarResolver = {
 Date: GraphQLDateTime,
}

module.exports = { resolvers: [usersResolvers, topicsResolvers, articlesResolvers, commentsResolvers, customScalarResolver] }