'use strict';

var webpack = require('webpack');
var path = require('path');
var srcPath = path.resolve(__dirname, 'src', 'app.js');
var dstPath = path.resolve(__dirname, 'web', 'js');
var nodeEnv = process.env.NODE_ENV || 'development';
var apiUrl = process.env.apiUrl || '';

// the base config /////////////////////////////////////////////////////////////////////////////////////////////////////
var config = {
  entry: srcPath,
  output: {
    path: dstPath,
    filename: 'app.js'
  },
  module: {
    loaders: [
      {
        test: /\.json$/,
        loader: 'json-loader'
      },
      {
        test: /\.js$/,
        loader: 'ng-annotate', // works RTL - example 'ng-annotate!jshint'
        exclude: /node_modules|coverage|scripts|web/
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify(nodeEnv),
        'appversion': JSON.stringify(require('./package.json').version),
        'apiUrl': JSON.stringify(apiUrl)
      }
    }),
    //new webpack.optimize.UglifyJsPlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.DedupePlugin()
  ]
};

// environment switch //////////////////////////////////////////////////////////////////////////////////////////////////
switch (nodeEnv) {
  case 'development':
  case 'test':
    config.devtool = 'eval';
    break;
  case 'staging':
    config.devtool = 'cheap-module-source-map';
    break;
  case 'production':
    config.devtool = 'cheap-module-source-map';
    break;
  default:
    console.error('No task for environment:', nodeEnv);
    process.exit(1);
}

// proccessing /////////////////////////////////////////////////////////////////////////////////////////////////////////
webpack(config, function (err, stats) {
  if (err) {
    console.log('webpack errors: ', err);
    process.exit(1);
  }
  var jsonStats = stats.toJson();
  if (jsonStats.errors.length > 0) {
    console.log('webpack jsonStats.errors: ', jsonStats.errors);
  }
  if (jsonStats.warnings.length > 0) {
    console.log('webpack jsonStats.warnings: ', jsonStats.warnings);
  }
  console.log('webpack build DONE for ', nodeEnv);
});
