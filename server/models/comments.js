const connection = require("../../db/connection");

const fetchComments = async (sort_by = 'created_at', order = 'desc') => await
  connection
    .select('*')
    .from('comments')
    .orderBy(sort_by, order)
    .returning('*');

const fetchCommentByID = async (comment_id) => await
  connection.select('*').from('comments').where({ comment_id }).returning('*').first();

const insertComment = async (body, username, article_id) => {
  rows = await connection
    .insert({ article_id, author: username, body })
    .into("comments")
    .returning("*");
  return rows[0];
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

module.exports = {
  fetchComments,
  fetchCommentByID,
  insertComment,
  deleteComment,
  updateCommentByID
}