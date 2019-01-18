const path = require('path');

module.exports = {
  mode: 'development',
  entry: {
    index : ['./src/page/index/index.js'],
    login : ['./src/page/login/index.js']

  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist')
  }
};