export enum Envs {
    dev = 'development',
    prod = 'production',
}

export class Env {
    static getEnv() {
        return process.env.NODE_ENV as Envs;
    }

    static isDev() {
        return this.getEnv() === Envs.dev;
    }

    static isProd() {
        return this.getEnv() === Envs.prod;
    }
}
