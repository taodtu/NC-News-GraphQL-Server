const connection = require("../../db/connection");

const fetchUser = async (username) => {
 const rows = await connection.select('*').from('users').where({ username }).returning('*');
 return rows[0];
};

const fetchArticlesByUser = async (author) => await connection
 .select('*')
 .from('articles')
 .where({ author })
 .returning('*');

const fetchCommentsByUser = async (author) => await connection
 .select('*')
 .from('comments')
 .where({ author })
 .returning('*');

export {
 fetchUser,
 fetchArticlesByUser,
 fetchCommentsByUser
}