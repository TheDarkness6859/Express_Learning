import pg from "pg";
import 'dotenv/config';

const { Pool } = pg

export const pool = new Pool({
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PWD
})

export const connectPg = async () => {
    try {
        const res = await pool.query('SELECT NOW()');
        console.log("Postgres connected")

    } catch (error) {
        console.log('Error to conect with Postgres', error);
        throw error;
    }
}