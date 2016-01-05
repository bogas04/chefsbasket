'use strict';

const gulp = require('gulp');
const webpack = require('webpack');
const bower = require('gulp-bower');
const stylus = require('gulp-stylus');
const nodemon = require('gulp-nodemon');
const rename = require('gulp-rename');
const plumber = require('gulp-plumber');
const runSequence = require('run-sequence');
const webpackStream = require('webpack-stream');
const autoprefixer = require('gulp-autoprefixer');

gulp.task('default', cb => runSequence(['dev-server', 'stylus', 'react-es2015-dev']) );

gulp.task('production', cb => runSequence( ['bower', 'stylus', 'react-es2015'] ) );

gulp.task('dev-server', cb => nodemon({
  script: 'server',
  exec: './node_modules/.bin/babel-node'
}));

gulp.task('bower', cb => (
  bower({ cwd: './client' })
  .pipe(gulp.dest('./client/components/'))
));

gulp.watch('styl/main.styl', ['stylus']);

gulp.task('stylus', cb => (
  gulp.src('styl/main.styl')
  .pipe(plumber())
  .pipe(stylus({
    compress: true,
  }))
  .pipe(autoprefixer({ browsers: ['> 1%', 'IE 7']}))
  .pipe(rename('main.css'))
  .pipe(gulp.dest('client/css'))
));


gulp.task('react-es2015', cb => (
  gulp.src('components/index.js')
  .pipe(webpackStream(Object.assign({}, webpackConfig, {
    plugins: [...webpackConfig.plugins, 
      new webpack.DefinePlugin({
        'process.env': {
          'NODE_ENV': JSON.stringify('production')
        }
      }),
      new webpack.optimize.OccurenceOrderPlugin(),
      new webpack.optimize.UglifyJsPlugin(),
    ],
  })))
  .pipe(gulp.dest('client/js/'))
));

gulp.task('react-es2015-dev', cb => (
  gulp.src('components/index.js')
  .pipe(plumber())
  .pipe(webpackStream(Object.assign({}, webpackConfig, {
    //plugins: [new webpack.HotModuleReplacementPlugin()].concat(webpackConfig.plugins),
    watch: true 
  })))
  .pipe(gulp.dest('client/js/'))
));

let webpackConfig = {
  module: {
    loaders: [
      { 
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /(node_modules|bower_components)/,
        include: /components/,
      }
    ],
  },
  output: {
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.ProvidePlugin({
      'Promise': 'es6-promise',
      'fetch': 'imports?this=>global!exports?global.fetch!whatwg-fetch'
    }),
  ]
};
