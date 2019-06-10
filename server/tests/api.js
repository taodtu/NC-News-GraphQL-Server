const axios = require('axios');

const API_URL = 'https://nc-news-graphql-server.herokuapp.com/graphql';

exports.topics = async () =>
 axios.post(API_URL, {
  query: `query{ topics{
  slug
  
}}`});



