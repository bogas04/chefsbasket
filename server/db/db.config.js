export let connection = 'postgres://hfygdzhpnwtnmn:ychmR53PoD-RNJGptJdcYOtEmT@ec2-54-195-252-202.eu-west-1.compute.amazonaws.com:5432/dfqmesgbjh4pnl';

export default let bookshelf = require('bookshelf')(
  require('knex')({
    client: 'pg',
    connection
  })
);
