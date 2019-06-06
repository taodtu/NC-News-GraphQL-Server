const connection = require("../../db/connection");

const fetchComments = async (sort_by = 'created_at', order = 'desc') => await
  connection
    .select('*')
    .from('comments')
    .orderBy(sort_by, order)
    .returning('*');

const fetchCommentByID = async (comment_id) => await
  connection.select('*').from('comments').where({ comment_id }).returning('*').first();

const insertComment = async (body, author) => {
  const res = await connection
    .insert({ body, author })
    .into("comments")
    .returning("*");
  return res[0]
}

const deleteComment = async (comment_id) => (await connection
  .select('*')
  .from('comments')
  .where({ comment_id })
  .del()) ? true : false;

const updateCommentByID = async (comment_id, inc_votes) => {
  const res = await connection
    .select('*')
    .from('comments')
    .where({ comment_id: comment_id })
    .increment('votes', inc_votes)
    .returning('*')

  return res[0]
}

export {
  fetchComments,
  fetchCommentByID,
  insertComment,
  deleteComment,
  updateCommentByID
}