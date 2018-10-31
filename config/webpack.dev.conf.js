const path = require('path');
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const baseWebpackConfig = require('./webpack.base.conf.js');
// const apiMocker = require('@kaola/webpack-api-mock-server');
// const ForkTSCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
// const proxy = require('http-proxy-middleware');
// const DashboardPlugin = require('webpack-dashboard/plugin');
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = merge(baseWebpackConfig, {
    output: {
        filename: '[name].js',
        chunkFilename: '[name].js',
        path: path.join(__dirname, 'build'),
        publicPath: '/'
    },
    module: {
        rules: [{
            test: /\.css$/,
            use: [
                'style-loader',
                'css-loader'
            ]
        }, {
            test: /\.less$/,
            use: [
                'vue-style-loader',
                'css-loader',
                'postcss-loader',
                'less-loader'
            ]
        }]
    },
    mode: 'development',
    plugins: [
        new HtmlWebpackPlugin({
            title: '视力平台',
            template: 'index.ejs',
            isDev: true
        })
    ],
    devServer: {
        open: false,
        contentBase: '/build/',
        // openPage: '',
        inline: true,
        quiet: false,
        disableHostCheck: true, // 解决 Invalid Host Header，禁用 host header 正确性检测
        port: 8080,
        stats: 'minimal',
        historyApiFallback: true
    }
});
