import * as merge from 'webpack-merge';
import { ClientConfig, ServerConfig } from './webpack.base.conf';

export const Client = merge(ClientConfig, {
    mode: 'production',
});

export const Server = merge(ServerConfig, {
    mode: 'production',
});

export default [Client];
