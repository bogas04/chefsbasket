// Update with your config settings.
import constants from '../../constants';

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
    connection: constants.produciton.database.connection,
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }
};
