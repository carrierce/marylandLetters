// Update with your config settings.
const appRoot = require('app-root-path');

module.exports = {
  development: {
    client: 'sqlite3',
    connection: {
      filename: appRoot + '/dev.sqlite3'
    },
    migrations: {
      directory: appRoot + '/db/migrations'
    },
    seeds: {
      directory: appRoot + '/db/seeds'
    },
    useNullAsDefault: true
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user: 'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user: 'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }
};
