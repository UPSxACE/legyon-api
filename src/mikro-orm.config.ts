import { MikroORM } from "@mikro-orm/core";
import { PostgreSqlDriver } from "@mikro-orm/postgresql";
import { TsMorphMetadataProvider } from "@mikro-orm/reflection";

export default {
    migrations: {
        path: './src/migrations',
        tableName: 'migrations',
        transactional: true,
    },
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    dbName: process.env.DB_USER,
    host: process.env.DB_HOST,
    port: 5432,
    entities: ['./dist/**/*.entity.js'],
    entitiesTs: ['./src/entities/*.ts'],
    driver: PostgreSqlDriver,
    metadataProvider: TsMorphMetadataProvider,
    tsNode: process.env.NODE_DEV === 'true' ? true : false,
    driverOptions: {
        connection: {
            ssl: {
                rejectUnauthorized: false,
            },
        },
    },
    debug: true,
} as Parameters<typeof MikroORM.init>[0]