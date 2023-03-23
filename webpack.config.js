const path = require("path");

module.exports = {
  entry: "./src/index.tsx",
  mode: "development",
  output: {
    filename: "bundle.js",
    path: path.resolve("dist"),
    publicPath: "/",
  },
  module: {
    rules:[
      {
        test: /\.[jt]sx?$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      },
    ], 
  },
  resolve: {
    extensions: ['*', '.js', '.jsx', '.tsx', '.ts'],
  },
  devServer: {
    static: {
        directory: path.join(__dirname, 'public/'),
    },
    port: 3000,
    devMiddleware: {
        publicPath: 'http://localhost:3000/dist/',
    },
    hot: "only",
  }
}