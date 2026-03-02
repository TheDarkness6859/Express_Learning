import mongoose from "mongoose";
import 'dotenv/config';

export const connectMongo = async () => {
    try {
        await mongoose.connect(process.env.MON_DB);
        console.log('Mongo connected');
    } catch (error) {
        console.log('Error to conect with Postgres', error);
    }
}

export const poolMongo = mongoose.connect(process.env.MON_DB);