var webpack = require('webpack');

module.exports = {
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
      }
    }),
    //new webpack.optimize.UglifyJsPlugin(
    //  {
    //    exclude: /node_modules/i
    //    //compress: {warnings: false}
    //  }
    //),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.DedupePlugin()
  ],
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
  devtool: 'eval' // https://webpack.github.io/docs/configuration.html#devtool
};