import mongoose from "mongoose";
import { type } from "node:os";

const authorSchema = new mongoose.Schema(
    {
        name: {type: String, required: true},
        nacionalty: {type: String, required: true}
    }
)

export const AuthorMongo = mongoose.model('Author', authorSchema);