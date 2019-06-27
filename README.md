# An Apollo Server 2 with Graphql, Express, Knex and PostgreSQL.

The client App is hosted on [Netlify](https://tao-apollo-graphql-nc-news-client.netlify.com/) and the client app source code is hosted on [Github](https://github.com/taodtu/react-apollo-graphql-ncnews-client).

Northcoders News is a social news aggregation, web content rating, and discussion website. Northcoders News has articles which are divided into topics. Each article has user curated ratings and can be up or down voted using the API. Users can also add comments about an article. Comments can also be up or down voted. A user can add comments and remove any comments which they have added.

This app builds the server with raw data from Northcoders using express, and stores data with PSQL.You can consume the built API via [here](https://nc-news-graphql-server.herokuapp.com/).

## Features 

* Node.js with Express and Apollo Server

  * Schema, Resolver, Model.
  * Queries, Mutations
  * cursor-based Pagination
  
* PostgreSQL Database with Knex

  * entities: topics, users, articles and comments


## Installation

* `git clone https://github.com/taodtu/NC-News-GraphQL-Server.git`
* `cd NC-News-GraphQL-Server`
* `touch knexfile.js`
* `npm install`
* fill out *knexfile.js file* (see below)
* start&seed PostgreSQL database
* `npm start`
* visit `http://localhost:8000` for GraphQL playground

#### knexfile.js file

Since this project is using PostgreSQL, you have to install it for your machine and get a database up and running. After you have created a database and a database user, you can copy&paste the code below and fill out the knexfile with your database credentials.

```
const ENV = process.env.NODE_ENV || 'development';
const { DB_URL } = process.env;
const baseConfig = {
  client: 'pg',
  migrations: {
    directory: './db/migrations',
  },
  seeds: {
    directory: './db/seeds',
  },
};

const customConfigs = {
  development: {
    connection: {
      database: 'nc_news',
      username: "YOURUSERNAME",
      password: "YOURPASSWORD",
    },
  },
  test: {
    connection: {
      database: 'nc_news_test',
      username: "YOURUSERNAME",
      password: "YOURPASSWORD",
    },
  },
  production: {
    connection: `${DB_URL}?ssl=true`,
  },
};

module.exports = { ...baseConfig, ...customConfigs[ENV] };
```

