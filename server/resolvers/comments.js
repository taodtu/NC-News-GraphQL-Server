exports.commentsResolvers = {
 Query: {
  comments: (parent, { sort_by, order }, { models }) => models.fetchComments(sort_by, order),
  getComment: (parent, { comment_id }, { models }) => models.fetchCommentByID(comment_id),
 },
 Mutation: {
  createComment: (parent, { body, author }, { models }) => models.insertComment(body, author),
  deleteComment: (parent, { comment_id }, { models }) => models.deleteComment(comment_id),
  updateComment: (parent, { comment_id, inc_votes }, { models }) => models.updateCommentByID(comment_id, inc_votes),
 },
}