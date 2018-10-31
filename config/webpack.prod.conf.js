const webpack = require('webpack');
const path = require('path');
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const baseWebpackConfig = require('./webpack.base.conf.js');

// const buildPath = '../build/';
const buildPathStatic = path.resolve(__dirname, `../build/static/`);

module.exports = merge(baseWebpackConfig, {
    output: {
        // filename: '[name].[hash:4].js',
        filename: 'js/app.[chunkhash:8].js',
        chunkFilename: 'js/[name].[chunkhash:8].js',
        path: buildPathStatic,
        publicPath: './'
    },
    module: {
        rules: [{
                test: /\.css$/,
                use: [{
                    loader: MiniCssExtractPlugin.loader,
                    options: {
                        publicPath: '../build/static'
                    }
                }, {
                    loader: 'css-loader'
                }]
            }, {
                test: /\.less$/,
                use: [{
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            publicPath: '../build/static'
                        }
                    }, {
                        loader: 'css-loader'
                    }, {
                        loader: 'postcss-loader'
                    }, {
                        loader: 'less-loader'
                    }
                ]
            }
        ]
    },
    mode: 'production',
    plugins: [
        new HtmlWebpackPlugin({
            title: '视力平台',
            filename: path.resolve(__dirname, `../build/static/index.html`),
            template: 'index.ejs',
            cdnPath: path.resolve(__dirname, `../build/static/dll/bundle.dll.js`)
        }),
        new MiniCssExtractPlugin({
            filename: 'css/index.[chunkhash:8].css',
            chunkFilename: 'css/[name].[chunkhash:8].css'
        }),
        new webpack.DllReferencePlugin({
            context: __dirname,
            manifest: require(path.resolve(__dirname, `../build/static/dll/bundle-manifest.json`))
        })
    ]
});
