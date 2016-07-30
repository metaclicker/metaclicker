var webpack = require('webpack');
var path = require('path');

module.exports = {
    devtool: "cheap-module-source-map",

    entry: [
        "react-hot-loader/patch",
        "webpack-dev-server/client?http://localhost:8080",
        "webpack/hot/only-dev-server",
        "./src/index"
    ],

    output: {
        filename: "app.js",
        path: path.join(__dirname, "dist"),
        publicPath: "/"
    },

    resolve: {
        extensions: ["", ".ts", ".tsx", ".js", ".jsx"]
    },

    module: {
        loaders: [
            { test: /\.ts(x?)$/, loader: "babel-loader", query: { 
                presets: ["es2015", "stage-0", "react"],
                plugins: ["react-hot-loader/babel"]
            } },
            { test: /\.ts(x?)$/, loader: "ts" },
            { test: /\.css/, loader: 'style!css?modules&sourceMap' },
        ]
    }
};
