const webpack = require('webpack');
const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');

const FAVICON_PNG = 'favicon.png';

module.exports = {
    mode: 'none',
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    devServer: {
        port: 9000,
        open: true,
        hot: true,
    },
    module: {
        rules: [
            {
                test: /\.(js|tsx|ts)$/,
                loader: 'babel-loader',
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(png|jpe?g)$/,
                loader: 'file-loader',
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            inject: true,
            title: 'index',
            template: 'index.html',
            favicon: FAVICON_PNG,
            minify: false,
        }),
        new webpack.EnvironmentPlugin({
            ENVIRONMENT_CONSTANT: 'constant_value',
        }),
    ],
};