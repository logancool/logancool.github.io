const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const SRC_DIR = path.join(__dirname, '/src');

module.exports = (_, argv) => {
    const isDevelopment = argv.mode === 'development';
    return {
        mode: isDevelopment ? 'development' : 'production',
        devtool: 'source-map',
        entry: `${SRC_DIR}/index.tsx`,
        devServer: {
            historyApiFallback: true,
            hot: true,
        },
        output: {
            filename: isDevelopment ? 'bundle.js' : 'bundle.[contenthash].js',
            path: path.resolve('./dist'),
            clean: true,
        },
        resolve: {
            extensions: ['.js', '.json', '.scss', '.ts', '.tsx'],
        },
        module: {
            rules: [
                {
                    test: /\.scss$/,
                    exclude: /\.module\.scss$/,
                    use: [
                        { loader: isDevelopment ? 'style-loader' : MiniCssExtractPlugin.loader },
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
                            loader: isDevelopment ? 'style-loader' : MiniCssExtractPlugin.loader,
                        },
                        {
                            loader: 'css-loader',
                            options: {
                                importLoaders: 1,
                                modules: {
                                    localIdentName: '[path]___[name]__[local]___[hash:base64:5]',
                                },
                                sourceMap: isDevelopment,
                            },
                        },
                        'postcss-loader',
                        'sass-loader',
                    ],
                },
                {
                    test: /\.png$/,
                    loader: 'url-loader',
                    options: {
                        limit: 100000,
                        mimetype: 'image/png',
                    },
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
                            },
                        },
                    ],
                },
                {
                    test: /\.js?/,
                    include: SRC_DIR,
                    use: ['babel-loader'],
                    enforce: 'pre',
                },
                {
                    test: /\.tsx?$/,
                    loader: 'babel-loader',
                },
            ],
        },
        plugins: [
            new CopyWebpackPlugin({
                patterns: [{ from: 'static' }],
                options: {
                    concurrency: 100,
                },
            }),
            new webpack.HotModuleReplacementPlugin(),
            new HtmlWebpackPlugin({
                title: 'l_o_g_a_n_c_o_o_l',
                template: './src/utils/root.html',
                favicon: './favicon.ico'
            }),
            new MiniCssExtractPlugin({
                filename: '[name].[hash].css',
                chunkFilename: '[id].[hash].css',
            }),
        ],
    };
};
