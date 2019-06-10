const axios = require('axios');

const API_URL = 'http://localhost:8000/graphql';

exports.topics = async () =>
 axios.post(API_URL, {
  query: `query{ topics{
  slug
  
}}`});



