const path = require("path");

module.exports = {
  entry: "./src/index.ts", // useless because, default enrty is src/index.js
  output: {
    path: path.resolve(__dirname, "dist-webpack"),
    filename: "index.js",
    library: {
      type: "module",
    },
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        // last loader is called first, it's output content is the input for the next loader
        use: [
          {
            loader: "ts-loader",
            options: {
              compilerOptions: {
                outDir: "dist-webpack",
              },
            },
          },
          {
            loader: path.resolve(__dirname, "webpack-loader-remove-logs/index.js"),
          },
        ],
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".js"],
  },
  experiments: {
    outputModule: true,
  },
  // optimization: {
  //   minimize: false,
  // },
};
