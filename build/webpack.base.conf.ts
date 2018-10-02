import * as extractTextPlugin from 'extract-text-webpack-plugin';
import * as  fs from 'fs';
import * as htmlPlugin from 'html-webpack-plugin';
import * as path from 'path';
import * as webpack from 'webpack';
import * as merge from 'webpack-merge';
const progressBarPlugin = require('progress-bar-webpack-plugin');

export function Root(...paths: string[]) {
    return path.join(__dirname, '..', ...paths);
}

export const BaseConfig: webpack.Configuration = {
    resolve: {
        extensions: ['.tsx', '.ts', '.jsx', '.js'],
        alias: {
            ...Object.assign({}, ...fs.readdirSync(Root('src')).map(name => ({ [name.split('.')[0]]: Root(`src/${name}`) }))),
            common_style: Root('src/assets/styles/common.scss'),
        },
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'awesome-typescript-loader',
            },
        ],
    },
};

export const ClientConfig = merge(BaseConfig, {
    entry: {
        client: Root('src/client.tsx'),
    },

    module: {
        rules: [
            {
                test: /.scss$/,
                use: extractTextPlugin.extract({
                    use: ['style-loader', 'css-loader', 'sass-loader'],
                    fallback: 'css-hot-loader',
                }),
            },
        ],
    },

    output: {
        filename: '[name].[hash:8].js',
        path: Root('dist'),
    },

    optimization: {
        splitChunks: {
            chunks: 'async',
            minSize: 30000,
            minChunks: 1,
            maxAsyncRequests: 5,
            maxInitialRequests: 3,
            name: true,
            cacheGroups: {
                'vendors': {
                    test: chunk => chunk.resource && /\.js$/.test(chunk.resource) && /node_modules/.test(chunk.resource),
                    chunks: 'initial',
                    name: 'vendors',
                    priority: 1,
                },
                'async-vendors': {
                    test: /[\\/]node_modules[\\/]/,
                    minChunks: 2,
                    chunks: 'async',
                    name: 'async-vendors',
                },
            },
        },
        runtimeChunk: {
            name: 'runtime',
        },
    },

    plugins: [
        new extractTextPlugin({
            filename: '[name].[hash:8].css',
            allChunks: true,
        }),

        new htmlPlugin({
            filename: 'index.html',
            template: Root('src/index.html'),
            chunksSortMode: 'auto',
        }),

        new progressBarPlugin(),
    ],
});

export const ServerConfig = merge(BaseConfig, {

});
