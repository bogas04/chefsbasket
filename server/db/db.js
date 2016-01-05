// Config Setup
let knexConfig = require('express')().get('env') === 'development' ? require('./knexfile').development : require('./knexfile').production;
let knex = require('knex')(knexConfig);
let bookshelf = require('bookshelf')(knex);
let data = {
  bookshelf,

  // 1:N - Article has many comments, a comment can be in only one Article
  Comments: bookshelf.Model.extend({
    tableName: 'comments',
    hasTimestamps: true,
    article: function() { this.belongsTo(data.Article) },
    user: function() { this.belongsTo(data.User) },
  }),

  // M:N - Collection has many articles, an article can be in many collections
  Collections: bookshelf.Model.extend({
    tableName: 'collections',
    hasTimestamps: true,
    articles: function() { this.belongsToMany(data.Article) },
    user: function() { this.belongsTo(data.User) },
  }),

  // 1:N - User has many comments, a comment can be only by one User
  // 1:N - User has many collections, a collection can be only by one User
  User: bookshelf.Model.extend({
    tableName: 'users',
    hasTimestamps: true,
    collections: function() { this.hasMany(data.Collections) },
    comments: function() { this.hasMany(data.Comments) },
  }),

  // N:M Article can be in many collections, a collection can have many Articles
  // 1:N Article has many comments, a comment can be in only one article
  Article: bookshelf.Model.extend({
    tableName: 'articles',
    hasTimestamps: true,
    collections: function() { this.belongsToMany(data.Collections) },
    comments: function() { this.hasMany(data.Comments) },
  }),
};

module.exports = data;
