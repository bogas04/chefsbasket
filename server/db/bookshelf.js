let knexConfig = require('express')().get('env') === 'development' ? require('./knexfile').development : require('./knexfile').production;

export default let bookshelf = require('bookshelf')(
  require('knex')(knexConfig)
);
