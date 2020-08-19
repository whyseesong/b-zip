const webpack = require('webpack');
const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const CaseSensitivePath = require('case-sensitive-paths-webpack-plugin');
const { TsconfigPathsPlugin } = require('tsconfig-paths-webpack-plugin');

const FAVICON_PNG = 'favicon.png';

module.exports = {
    mode: 'none',
    entry: {
        main: './src/index.tsx',
        // main2: './src/main2.tsx',
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/',
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
        new CaseSensitivePath(),
        new HtmlWebpackPlugin({
            inject: true,
            title: 'b-zip!',
            template: 'index.html',
            favicon: FAVICON_PNG,
            minify: false,
        }),
        new webpack.EnvironmentPlugin({
            ENVIRONMENT_CONSTANT: 'constant_value',
        }),
    ],
    resolve: {
        plugins: [new TsconfigPathsPlugin( {configFile: './tsconfig.json'})],
        extensions: ['.ts', '.tsx', '.js'],
    }
};