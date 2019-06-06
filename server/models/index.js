import { fetchTopics, fetchArticlesByTopic, countComments } from './topics';
import { fetchUser, fetchArticlesByUser, fetchCommentsByUser, articleCount } from './users';
import { fetchArticles, fetchArticleByID, fetchCommentsByArticle } from './articles';
import { fetchComments, fetchCommentByID, insertComment, deleteComment, updateCommentByID } from './comments'

export default {
 fetchTopics, fetchArticlesByTopic, countComments, fetchUser, fetchArticlesByUser, articleCount,
 fetchCommentsByUser, fetchArticles, fetchArticleByID, fetchCommentsByArticle, fetchComments,
 fetchCommentByID, insertComment, deleteComment, updateCommentByID
};