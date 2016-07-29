var path = require('path');

module.exports = {
    entry: "./src/index.tsx",

    output: {
        filename: "app.js",
        path: path.join(__dirname, "dist"),
        publicPath: "/"
    },

    devtool: "eval-source-map",

    resolve: {
        extensions: ["", ".ts", ".tsx", ".js", ".jsx"]
    },

    module: {
        loaders: [
            { test: /\.ts(x?)$/, loader: "babel-loader", query: { 
                presets: ["es2015", "react"],
                plugins: [[
                    "react-transform", {
                        "transforms": [{
                            "transform": "react-transform-hmr",
                            "imports": ["react"],
                            "locals": ["module"]
                        }]
                    }
                ]]
            } },
            { test: /\.ts(x?)$/, loader: "ts" },
        ]
    },

    watchOptions: {
        poll: true
    },

    plugins: []
};
