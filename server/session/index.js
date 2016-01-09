import session from 'express-session';
const knexSession = require('connect-session-knex')(session);
const { knex } = require('../db').bookshelf;

// TODO: Need to add index for some column, refer to connect-session-knex's doc
module.exports = session({
  secret: 'divjot singh yolo 123',
  resave: true,
  saveUninitialized: false,
  cookie: { maxAge : 24*60*60*1000 },
  store: new knexSession({
    knex,
  }),
});
