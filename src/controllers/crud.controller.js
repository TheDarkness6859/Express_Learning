import { authorService } from "../service/crud.service.js";

export const authorController = {

    getAuthors: async (req, res) => {
        try {
            const author = await authorService.getAll();
            res.status(200).json({ response: author});
        } catch (error) {
            res.status(500).json({ error: error.message})
        }
    },

    postAuthors: async (req, res) => {

        const {name, nacionality} = req.body

        try {
            const newAuthor = await authorService.create({name, nacionality});
            res.status(201).json({response: newAuthor});
        } catch (error) {
            res.status(500).json({ error: error.message});
        }
    },

    deleteAuthors: async (req, res) => {

        const {name} = req.params;

        try {
            const deletedAuthor = await authorService.delete({name});
            res.status(200).json({response: deletedAuthor})
        } catch (error) {
            res.status(500).json({ error: error.message});
        }
    },

    updateAuthor: async (req, res) => {

        const {id} = req.params;
        const {name, nacionality} = req.body

        try {
            const updatedAuthor = await authorService.update({id, name, nacionality});
            res.status(200).json({response: updatedAuthor});
        } catch (error) {
            res.status(500).json({ error: error.message});
        }
    }
}