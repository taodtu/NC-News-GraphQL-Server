const connection = require("../../db/connection");

const fetchTopics = async () => await connection.select('*').from('topics').returning('*');

const fetchArticlesByTopic = async (topic) => await connection
 .select('*')
 .from('articles')
 .where({ topic })
 .returning('*');

export {
 fetchTopics,
 fetchArticlesByTopic
}


