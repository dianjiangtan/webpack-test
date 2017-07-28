/**
 * Created by TC on 2017/7/27.
 */
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const WebpackManifestPlugin = require('webpack-manifest-plugin');

module.exports = {
    entry: {
        app: './src/index.js',
        print: './src/print.js'
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist')
    },
    // module: {
    //     rules: [
    //         {
    //             test: /\.css$/,
    //             use: [ 'style-loader', 'css-loader' ]
    //         }
    //     ]
    // },
    // devtool: 'inline-source-map',
    // devServer: {
    //     hot: true, // 告诉 dev-server 我们在使用 HMR
    //     contentBase: path.resolve(__dirname, 'dist'),
    //     publicPath: '/'
    // },
    plugins: [
        // new webpack.HotModuleReplacementPlugin(), // 启用 HMR
        // new CleanWebpackPlugin(['dist']),
        // new WebpackManifestPlugin({
        //     // fileName: 'manifest.json',
        //     // basePath: '/dist/',
        //     // seed: {
        //     //     name: 'My Manifest'
        //     // }
        // }),
        // new HtmlWebpackPlugin({
        //     title: 'Output Management'
        // }),
        // new webpack.optimize.CommonsChunkPlugin({
        //     name: 'common' // Specify the common bundle's name.
        // })
    ],
};