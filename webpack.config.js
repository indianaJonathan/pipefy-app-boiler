const path = require("path");

const webpack = require("webpack");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const dotenv = require("dotenv");

module.exports = () => {
  const env = dotenv.config().parsed;

  const envKeys = Object.keys(env).reduce((prev, next) => {
    prev[`process.env.${next}`] = JSON.stringify(env[next]);
    return prev;
  }, {});

  console.log("environment vairables", envKeys);

  return {
    entry: {
      main: "./client"
    },
    output: {
      filename: 'public/client.js'
    },
    module: {
      rules: [
        {
          test: /\.css$/, 
          use: [ 'style-loader', 'css-loader' ]
        },
        {
          test: /\.js$/,
          exclude: /(node_modules|bower_components)/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['env', 'react', 'stage-3']
            }
          }
        }
      ],
      loaders: [
        { test: /\.css$/, loader: "style-loader!css-loader" }
      ]
    },
    plugins: [
      new ExtractTextPlugin({filename: "[name].css", allChunks: true}),
      new webpack.DefinePlugin(envKeys),
    ]
  }
}
