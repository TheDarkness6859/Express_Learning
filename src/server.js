import app from "./app.js";
import 'dotenv/config';
import { connectMongo } from "./configuration/mongo.js";
import { connectPg } from "./configuration/postgres.js";

const PORT = process.env.APP_PORT;

const startServer = async () => {
    try {

        await connectMongo();
        await connectPg();

        app.listen(PORT , () =>{
            console.log(`Server run in port: ${PORT}`);
        });
    } catch (error) {
        console.error('Error to start the server:', error);
    }
};

startServer();