const connection = require("../../db/connection");

const fetchUser = async (username) => {
 const rows = await connection.select('*').from('users').where({ username }).returning('*');
 return rows[0];
};

const fetchArticlesByUser = async (user) => await connection
 .select('*')
 .from('articles')
 .where({ author: user })
 .returning('*');

export {
 fetchUser,
 fetchArticlesByUser
}