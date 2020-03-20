const path = require('path');
const SRC_DIR = path.join(__dirname, '/react-client/src');
const DIST_DIR = path.join(__dirname, '/react-client/dist');
const webpack = require('webpack');
module.exports = {
    mode: 'production',
    // Enable sourcemaps for debugging webpack's output.
    devtool: 'source-map',
    entry: `${SRC_DIR}/index.tsx`,
    output: {
        path: DIST_DIR,
        filename: 'bundle.js',
    },
    resolve: {
        extensions: ['.js', '.', '.json', '.css', '.ts', '.tsx'],
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader',
            },
            {
                test: /\.png$/,
                loader: 'url-loader?limit=100000&minetype=image/png',
            },
            {
                test: /\.jpg/,
                loader: 'file-loader',
            },
            {
                test: /\.js?/,
                include: SRC_DIR,
                use: ['source-map-loader'],
                enforce: 'pre',
            },
            {
                test: /\.tsx?$/,
                loader: 'babel-loader',
            },
        ],
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production'),
        }),
    ],
};
