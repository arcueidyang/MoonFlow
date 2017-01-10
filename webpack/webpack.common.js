var webpack = require("webpack");
var HtmlWebpackPlugin = require("html-webpack-plugin");
var ExtractTextPlugin = require("extrac-text-webpack-plugin");
var helpers = require("./helpers");

module.exports = {
    entry: {
        "app": "../Client/app.component.ts"
    },
    resolve: {
        extensions: ["", ".ts", ".js"]
    },

    module: {
        loaders: [
            {
                test: /\.ts$/,
                loaders: ["awesome-typescript-loader"]
            },
            {
                test: /\.html$/,
                loaders: "html"
            },
            {
                test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
                loader: 'file?name=assets/[name].[hash].[ext]'
            },
            //load css that is NOT imported through ng2
            {
                test: /\.css$/,
                include: helpers.root("../Client", "Styles"),
                loader: ExtractTextPlugin.extract("style", "css?sourceMap")
            },
            //load css that is imported through ng2
            {
                test: /\.css$/,
                exclude: helpers.root("../Client", "Styles"),
                loader: "raw"
            }
        ]
    },

    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: ["app"]
        }),

        new HtmlWebpackPlugin({
            template: "../index.html"
        })
    ]

}