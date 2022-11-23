import 'dotenv/config'

export const db_config = {
    dialect: 'postgres',
    host: process.env.DB_HOST,
    port: process.env.BD_PORT,
    database: 'test',
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD
}