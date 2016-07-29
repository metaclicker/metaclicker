var webpack = require('webpack');

module.exports = {
    devtool: "source-map",

    entry: "./src/index.tsx",

    output: {
        filename: "./dist/app.js",
    },

    resolve: {
        extensions: ["", ".ts", ".tsx", ".js", ".jsx"]
    },

    module: {
        loaders: [
            { test: /\.ts(x?)$/, loader: "babel-loader", query: { presets: ["es2015", "react"] } },
            { test: /\.ts(x?)$/, loader: "ts" },
        ]
    },

    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                "NODE_ENV": JSON.stringify("production")
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        }),
        new webpack.optimize.OccurrenceOrderPlugin()
    ]
};
