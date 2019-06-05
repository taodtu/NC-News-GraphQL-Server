const connection = require("../../db/connection");

const fetchTopics = async () => await connection.select('*').from('topics').returning('*');

export {
 fetchTopics
}