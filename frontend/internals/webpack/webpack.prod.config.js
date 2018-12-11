// Important modules this config uses
const path = require("path")
const ManifestPlugin = require("webpack-manifest-plugin")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const baseConfig = require("./webpack.base.config")

module.exports = {
  ...baseConfig,
  mode: "production",
  // In production, we skip all hot-reloading stuff
  entry: [path.join(process.cwd(), "app/app.js")],

  // Utilize long-term caching by adding content hashes (not compilation hashes) to compiled assets
  output: {
    ...baseConfig.output,
    filename: "[name].[chunkhash].js",
    chunkFilename: "[name].[chunkhash].chunk.js",
  },

  optimization: {
    ...baseConfig.optimization,
    concatenateModules: true,
  },

  plugins: [
    ...baseConfig.plugins,

    // Minify and optimize the index.html
    new HtmlWebpackPlugin({
      template: "app/index.html",
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true,
      },
      inject: true,
    }),
    new ManifestPlugin({
      publicPath: "",
    }),
  ],

  performance: {
    assetFilter: assetFilename => !/(\.map$)|(^(main\.|favicon\.))/.test(assetFilename),
  },
}
