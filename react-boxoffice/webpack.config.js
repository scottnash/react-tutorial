var webpack = require("webpack"),
    HtmlWebpackPlugin = require('html-webpack-plugin'),
    ExtractTextPlugin = require("extract-text-webpack-plugin"),
    HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
        template: __dirname + '/app/boxoffice.html',
        filename: 'index.html',
        inject: 'body'
    }),
    ExtractTextPluginConfig = new ExtractTextPlugin("css/styles.css"),
    UglifyJsPluginConfig = new webpack.optimize.UglifyJsPlugin({
        compress: {
            warnings: false
        }
    }),
    envPlugin = new webpack.DefinePlugin({
        'process.env':{
            'NODE_ENV': JSON.stringify('staging')
        }
    });

module.exports = {
    entry: [
        './app/boxoffice.js'
    ],
    module: {
        loaders: [
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract(['css','sass'])
            },
            {
                test: /\.js?$/,
                exclude: /(node_modules)/,
                loader: 'babel-loader'
            }
        ]
    },
    output: {
        filename: "js/app.js",
        path: __dirname + '/build'
    },
    plugins: [
        ExtractTextPluginConfig,
        HTMLWebpackPluginConfig,
        envPlugin
    ]
}

/*UglifyJsPluginConfig,*/