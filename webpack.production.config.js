const path = require('path')
const TerserPlugin = require('terser-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWEbPackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        'hello-world': './src/hello-world.js',
        kiwi: './src/kiwi.js'

    },
    output: {
        filename: '[name].bundle.[contenthash].js',
        path: path.resolve(__dirname, './dist')
    },
    mode: 'production',
    optimization: {
        splitChunks: {
            chunks: "all",
            minSize: 5000,
            automaticNameDelimiter: '_'
        }
    },
    module: {
        rules: [
            {
                test: /\.jpg$/,
                use: [
                    'file-loader'
                ]
            },
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader, 'css-loader'
                ]
            },
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'
                ]
            },
            {
                test: /\.js$/,
                exclude: /node_module/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [ '@babel/env' ],
                        plugins: [ 'transform-class-properties' ]
                    },
                }
            },
            {
                test: /\.hbs$/,
                use: [
                    'handlebars-loader'
                ]
            },
        ]
    },
    plugins: [
        new TerserPlugin(),
        new MiniCssExtractPlugin({
            filename: '[name].[contenthash].css',

        }),
        new CleanWebpackPlugin(),
        new HtmlWEbPackPlugin({
            filename: 'hello-world.html',
            chunks: ['hello-world'],
            title: 'Hello World',
            template: 'src/page-template.hbs',
            description: 'hello-world'
            
        }),
        new HtmlWEbPackPlugin({
            filename: 'kiwi.html',
            chunks: ['kiwi'],
            title: 'kiwi',
            template: 'src/page-template.hbs',
            description: 'kiwi'
            
        }),
    ]
}