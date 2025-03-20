const path = require('path');
const CopyPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    mode: 'development',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
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
                // { from: "index.html", to: "" },
                { from: "style.css", to: "" },
                { from: "node_modules/boxicons/dist/boxicons.js", to: "" },
            ],
        }),
        new HtmlWebpackPlugin({
            template: './index.html',
            baseUrl: '/'
        })
    ],
};