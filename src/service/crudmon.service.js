import { AuthorMongo } from "../models/authors.models.js";

export const mongoService = {

    getAll : async () => {
        return await AuthorMongo.find().sort({name: 1});
    },

    create: async (name, nacionalty) => {
        const newAuthor = new AuthorMongo({name, nacionalty});
        return await newAuthor.save();
    },

    delete: async (id) => {
        return await AuthorMongo.findByIdAndDelete(id);
    },

    update: async (id, name, nacionalty) => {
        return await AuthorMongo.findByIdAndUpdate(
            id,
            {name, nacionalty},
            {returnDocument: 'after'}
        );
    }
}
