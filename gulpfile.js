'use strict';

const gulp = require('gulp');
const webpack = require('webpack');
const shell = require('gulp-shell');
const stylus = require('gulp-stylus');
const rename = require('gulp-rename');
const plumber = require('gulp-plumber');
const runSequence = require('run-sequence');
const webpackStream = require('webpack-stream');
const autoprefixer = require('gulp-autoprefixer');

gulp.task('default', cb => {
  runSequence(
    ['stylus', 'react-es6-dev']
  );
});
gulp.task('production', cb => {
  runSequence(
    ['stylus', 'react-es6']
  );
});

gulp.task('start-server', shell.task([
  'babel-node server --presets es2015',
]));

gulp.watch('styl/main.styl', ['stylus']);

gulp.task('stylus', cb => {
  return gulp.src('styl/main.styl')
  .pipe(plumber())
  .pipe(stylus({
    compress: true,
  }))
  .pipe(autoprefixer({ browsers: ['> 1%', 'IE 7']}))
  .pipe(rename('main.css'))
  .pipe(gulp.dest('client/css'))
});


gulp.task('react-es6', cb => {
  return gulp.src('components/index.js')
  .pipe(plumber())
  .pipe(Object.assign(webpackStream(webpackConfig), {
    plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin(),
  ]}))
  .pipe(gulp.dest('client/js/'));
});

gulp.task('react-es6-dev', cb => {
  return gulp.src('components/index.js')
  .pipe(plumber())
  .pipe(webpackStream(Object.assign(webpackConfig, { watch: true })))
  .pipe(gulp.dest('client/js/'));
});

const webpackConfig = {
  module: {
    loaders: [
      { 
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /(node_modules|bower_components)/,
        include: /components/,
        query: {
          presets: ['react', 'es2015'],
        }
      }
    ]
  },
  output: {
    filename: 'bundle.js'
  }
};
