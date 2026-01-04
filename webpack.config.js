const path = require('path');

module.exports = {
  context: path.resolve(__dirname, "src"),
  entry: "./index",
  output: {
    filename: "app.js",
    path: path.resolve(__dirname, "dist")
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              ['@babel/preset-env', {
                useBuiltIns: false
              }]
            ]
          }
        }
      }
    ]
  }
}