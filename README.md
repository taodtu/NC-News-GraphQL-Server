# nc-news-graphql-server

An Apollo Server 2 with Graphql, Express, Knex and PostgreSQL.

## Features 

* Node.js with Express and Apollo Server

  * Queries, Mutations, Subscriptions
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

## Available Scripts

Create development and test databases locally:

```bash
npm run setup-dbs
```

Create a new migration file:

```bash
npm run migrate-make <filename>
```

Run all migrations:

```bash
npm run migrate-latest
```

Rollback all migrations:

```bash
npm run migrate-rollback
```

Run tests:

```bash
npm test
```

Rollback, migrate -> latest, then start inserting data into the database:

```bash
npm run seed
```

Run the server with `nodemon`, for hot reload:

```bash
npm run dev
```

Run the server with `node`:

```bash
npm start
```
