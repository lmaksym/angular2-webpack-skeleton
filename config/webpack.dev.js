const webpackMerge = require('webpack-merge');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const commonConfig = require('./webpack.common.js');
const helpers = require('./helpers');
const webpack = require('webpack');

module.exports = webpackMerge(commonConfig, {
    devtool: 'source-map',

    output: {
        filename: '[name].js',
        chunkFilename: '[id].chunk.js'
    },

    plugins: [
        new ExtractTextPlugin('[name].css'),
        // new webpack.HotModuleReplacementPlugin({
        //     multiStep: true
        // }),
        new webpack.DefinePlugin({
            'process.env': {
                'ENV': JSON.stringify('development')
            },
            'HMR':JSON.stringify('true')
        })
    ],

    devServer: {
        historyApiFallback: true,
        inline: true,
        // hot:true,
        host: '0.0.0.0',
        port: 3030,
        watchOptions: {
            aggregateTimeout: 300,
            poll: 1000
        }
    }
});