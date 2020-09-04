const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: "./src/index.js",
    output: {
        path: path.join(__dirname, "/public"),
        filename: "bundle.js",
    },
    module: {
        rules: [
            {
                test: /\.js?/,
                exclude: /node_modules/,
                resolve: {
                    extensions: [".js", ".jsx"],
                },
                use: { loader: "babel-loader" },
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader", "sass-loader"],
            },
            {
                test: /\.scss$/,
                use: ["style-loader", "css-loader", "sass-loader"],
            },
            {
                test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
                loader: require.resolve("url-loader"),
                options: {
                    limit: 10000,
                    name: "static/media/[name].[hash:8].[ext]",
                },
            },
        ],
    },
    plugins: [new HtmlWebpackPlugin({ template: "./src/index.html" })],
};
