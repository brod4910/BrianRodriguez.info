var HtmlWebpackPlugin = require('html-webpack-plugin');

var ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path');

module.exports = {
    entry: path.resolve(__dirname, './src/index.js'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index.bundle.js',
        publicPath: '/dist'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader'],
                    }
                )
            },
            {
              test: /\.jsx?$/,
              exclude: /node_modules/,
              loader: 'babel-loader',
                options: {
                  presets: ['es2015', 'react']
                }
            }
        ]
    },
    devServer: {
        contentBase: path.join(__dirname, "dist"),
        compress: true,
        stats: 'errors-only',
        open: true
    },
    plugins: [
        new HtmlWebpackPlugin({
            // minify: {
            //     collapseWhitespace: true
            // },
            hash: true,
            template: './src/index.html',
            }),
        new ExtractTextPlugin({
            filename: 'index.css',
            disable: false,
            allChunks: true,
        })
    ]
};