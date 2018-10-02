import * as webpack from 'webpack';
import * as merge from 'webpack-merge';
import { ClientConfig, Root, ServerConfig } from './webpack.base.conf';

export const Client = merge(ClientConfig, {
    mode: 'development',

    devServer: {
        port: 9000,
        historyApiFallback: true,
        hot: true,
        inline: true,
        open: true,
        contentBase: Root('dist'),
    },

    plugins: [
        new webpack.HotModuleReplacementPlugin(),
    ],
});

export const Server = merge(ServerConfig, {
    mode: 'development',
});

export default [Client];
