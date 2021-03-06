const connection = require("../../db/connection");

const fetchTopics = async () => connection.select('topics.*').count({ article_count: 'article_id' })
 .from('topics')
 .leftJoin('articles', 'articles.topic', '=', 'topics.slug')
 .groupBy('topics.slug').returning('*');

const fetchArticlesByTopic = async (topic, offset, limit, sort_by, order) => await connection
 .select('articles.*')
 .count({ comment_count: 'comment_id' })
 .from('articles')
 .where({ topic })
 .leftJoin('comments', 'comments.article_id', '=', 'articles.article_id')
 .groupBy('articles.article_id')
 .limit(limit)
 .offset(offset)
 .orderBy(sort_by, order);

const countComments = async (topic) => {
 const articles = await fetchArticlesByTopic(topic, offset = 0, limit = null, sort_by = "created_at", order = "desc");
 return articles.reduce((acc, cur) => acc += +cur.comment_count, 0)
};

module.exports = {
 fetchTopics,
 fetchArticlesByTopic,
 countComments
}


