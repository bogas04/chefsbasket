// Update with your config settings.

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
    connection: 'postgres://hfygdzhpnwtnmn:ychmR53PoD-RNJGptJdcYOtEmT@ec2-54-195-252-202.eu-west-1.compute.amazonaws.com:5432/dfqmesgbjh4pnl',
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
