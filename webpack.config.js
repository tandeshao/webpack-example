const path = require("path");
const BundleAnalyzerPlugin =
  require("webpack-bundle-analyzer").BundleAnalyzerPlugin;

//by default webpack looks at src/index.js to build the production ready js code.
module.exports = {
  // entry can be loaded as an object to support code splitting. So that code is only loaded for pages that need it.
  entry: "./src/index.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.scss$/, //regex to match with any file that ends with scss
        // loaders are programs that process everything that is not javascript files.
        use: [
          // Creates `style` nodes from JS strings
          "style-loader",
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader",
        ],
      },
    ],
  },
  plugins: [new BundleAnalyzerPlugin()],
  devServer: {
    // allows hot module replacement and compress.. can take a look if needed.
    static: {
      directory: path.join(__dirname, "public"),
    },
    port: 9000,
  },
};
