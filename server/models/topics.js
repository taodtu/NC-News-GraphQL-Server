const connection = require("../../db/connection");

const fetchTopics = async () => connection.select('topics.*').count({ article_count: 'article_id' })
 .from('topics')
 .leftJoin('articles', 'articles.topic', '=', 'topics.slug')
 .groupBy('topics.slug').returning('*');

const fetchArticlesByTopic = async (topic) => await connection
 .select('articles.*')
 .count({ comment_count: 'comment_id' })
 .from('articles')
 .where({ topic })
 .leftJoin('comments', 'comments.article_id', '=', 'articles.article_id')
 .groupBy('articles.article_id')
 .returning('*');

const countComments = async (topic) => {
 const articles = await fetchArticlesByTopic(topic);
 return articles.reduce((acc, cur) => acc += +cur.comment_count, 0)
};

module.exports = {
 fetchTopics,
 fetchArticlesByTopic,
 countComments
}


