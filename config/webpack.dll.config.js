const webpack = require('webpack');
const path = require('path');

module.exports = (env) => {
    return {
        entry: {
            bundle: [
                'vue',
                'vue-router',
                'axios',
                'iview'
            ]
        },
        output: {
            path: path.join(__dirname, '../build/static/dll'),
            filename: '[name].dll.js',
            library: '[name]_library'
        },
        // mode: env.NODE_ENV === 'prod' ? 'production' : 'development',
        mode: 'production',
        plugins: [
            new webpack.DllPlugin({
                path: path.join(__dirname, '../build/static/dll', '[name]-manifest.json'),
                name: '[name]_library',
                context: __dirname
            })
        ]
    };
};
