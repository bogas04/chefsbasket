// Update with your config settings.
'use strict';
let constants = require('../../constants');

module.exports = {
  development: {
    client: 'postgresql',
    connection: {
      host: '127.0.0.1',
      database: 'chefsbasket',
      user: 'root',
      password: '_)(*&^%$#@!'
    }
  },
  production: {
    client: 'postgresql',
    connection: constants.production.database.connection,
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }
};
