var path = require('path'),
    webpack = require("webpack"),
    precss = require('precss'),
    autoprefixer = require('autoprefixer'),
    ExtractTextPlugin = require("extract-text-webpack-plugin");


module.exports = {
    entry: './app/entry.js',
    output: {
        path: './build',
        publicPath: '/build/',
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract(['css','sass','postcss-loader'])
            },
            {
                test: /\.js?$/,
                exclude: /(node_modules)/,
                loader: 'babel',
                query: {
                    presets: ['es2015','react']
                }
            }
        ]
    },
    postcss: function () {
        return [precss, autoprefixer];
    },
    plugins: [
        new ExtractTextPlugin("styles.css"),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        })
    ]
};