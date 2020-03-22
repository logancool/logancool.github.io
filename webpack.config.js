const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const SRC_DIR = path.join(__dirname, '/client/src');
const DIST_DIR = path.join(__dirname, '/client/dist');
const webpack = require('webpack');

module.exports = (env, argv) => {
    const isDevelopment = argv.mode === 'development';

    return {
        devtool: 'source-map',
        entry: `${SRC_DIR}/index.tsx`,
        output: {
            path: DIST_DIR,
            filename: 'bundle.js',
        },
        resolve: {
            extensions: ['.js', '.json', '.scss', '.ts', '.tsx'],
        },
        module: {
            rules: [
                {
                    test: /\.scss$/,
                    exclude: /\.module\.scss$/,
                    loader: [
                        isDevelopment ? 'style-loader' : MiniCssExtractPlugin.loader,
                        'css-loader',
                        {
                            loader: 'sass-loader',
                            options: {
                                sourceMap: isDevelopment,
                            },
                        },
                        'postcss-loader',
                        'sass-loader',
                    ],
                },
                {
                    test: /\.module\.scss$/,
                    exclude: /node_modules/,
                    use: [
                        {
                            // After all CSS loaders we use plugin to do his work.
                            // It gets all transformed CSS and extracts it into separate
                            // single bundled file
                            loader: isDevelopment ? 'style-loader' : MiniCssExtractPlugin.loader,
                        },
                        {
                            loader: 'css-loader',
                            options: {
                                modules: true,
                                sourceMap: isDevelopment,
                            },
                        },
                        'postcss-loader',
                        'sass-loader',
                    ],
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
                    test: /\.(woff|woff2|ttf|otf|eot)$/,
                    use: [
                        {
                            loader: 'file-loader',
                            options: {
                                outputPath: `fonts/`,
                                publicPath: 'client/dist/fonts',
                            },
                        },
                    ],
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
            new MiniCssExtractPlugin({
                filename: isDevelopment ? '[name].css' : '[name].[hash].css',
                chunkFilename: isDevelopment ? '[id].css' : '[id].[hash].css',
            }),
        ],
    };
};
