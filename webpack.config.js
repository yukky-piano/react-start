module.exports = {
  entry: __dirname + "/src/main.js",
  output: {
    path: __dirname + "/dist",
    filename: "like-button.js"
  },
  module: {
    rules: [
			{test: /\.js$/, loader: "babel-loader", query: {presets: ["react", "es2015", "stage-0"]}}
    ]
  }
};
