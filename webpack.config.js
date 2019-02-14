const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");//引入插件mini-css-extract-plugin


module.exports = {
  mode: 'development',
  entry: {
    index: ['./src/page/index/index.js'],
    login: ['./src/page/login/index.js']

  },
  output: {
    filename: 'js/[name].js',
    path: path.resolve(__dirname, 'dist'),

  },
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    port: 9999
  },
  optimization: {//公共代码提取
    splitChunks: {
      chunks: 'initial',
      minSize: 30000,
      maxSize: 0,
      minChunks: 1,
      maxAsyncRequests: 5,
      maxInitialRequests: 3,
      automaticNameDelimiter: '~',
      name: true,
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10
        },
        default: {
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true
        },
        commons: {
          chunks: "initial",
          minChunks: 2,
          maxInitialRequests: 5, // The default limit is too small to showcase the effect
          minSize: 0,
          name: "commons"
        },

      }
    }
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader']
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              name: '[name].[ext]',
              limit: 10,
              outputPath : "images",
              publicPath: "../images"
            }
          }

        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "src/view/index.html",
      filename: 'html/index.html',
    }),
    new MiniCssExtractPlugin({//实例MiniCssExtractPlugin
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: 'css/[name].css',
      chunkFilename: '[id].css',
    })
  ],
  // Webpack alias 配置
  resolve: {
    alias: {
      util: path.resolve(__dirname, 'src/util/'),
      page: path.resolve(__dirname, 'src/page/'),
      service: path.resolve(__dirname, 'src/service/'),
      image: path.resolve(__dirname, 'src/image/'),
    }
  }
};
