const connection = require("../../db/connection");

const fetchComments = async () => await connection.select('*').from('comments').returning('*');

const fetchCommentByID = async (comment_id) => await
 connection.select('*').from('comments').where({ comment_id }).returning('*').first();


export {
 fetchComments,
 fetchCommentByID,
}