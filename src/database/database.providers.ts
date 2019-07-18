import { createConnection } from 'typeorm';
export const databaseProviders = {
    provide: 'CONNECTION',
    useFactory: async () => createConnection({
        type: 'postgres',
        host: process.env.POSTGRES_HOST,
        port: +process.env.POSTGRES_PORT,
        username: process.env.POSTGRES_USER,
        password: process.env.POSTGRES_PASSWORD,
        database: process.env.POSTGRES_DB,
        entities: [
            __dirname + '/../**/*.entity{.ts,.js}',
        ],
         synchronize: true,
    }),
};
