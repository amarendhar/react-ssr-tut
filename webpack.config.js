const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = {
  name: 'SSR',
  entry: './app/SSR.js',
  output: {
    path: path.join(__dirname, '.', 'dist', 'assets'),
    filename: 'SSR.js',
    libraryTarget: 'commonjs2',
    publicPath: '/assets/',
  },
  target: 'node',
  externals: nodeExternals(),  
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',
        include: path.join(__dirname, '.', 'app'),
        exclude: path.join(__dirname, '.', 'node_modules'),
      },
      {
        test: /\.css$/,
        loader: 'css/locals?module&localIdentName=[name]__[local]___[hash:base64:5]'
      }      
    ],
  },
  resolve: {
    root: [path.join(__dirname, '.', 'app')],
    extensions: ['', '.js', '.jsx', 'css'],
  },
};
