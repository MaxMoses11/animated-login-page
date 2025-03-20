const path = require('path');
const CopyPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    mode: 'development',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'docs'),
    },
    devServer: {
        static: {
            directory: path.join(__dirname, 'public'),
        },
        compress: true,
        port: 5000,
    },
    plugins: [
        new CopyPlugin({
            patterns: [
                { from: "style.css", to: "" },
            ],
        }),
        new HtmlWebpackPlugin({
            template: './index.html',
            baseUrl: '/'
        })
    ],
};