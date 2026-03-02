import { authorService } from "../service/crud.service.js";

export const authorController = {

    getAuthors: async (req, res) => {
        try {
            const author = await authorService.getAll();
            res.status(200).json({ response: author});
        } catch (error) {
            console.error('Error to get the authors:', error);
            res.status(500).json({ error: error.message})
        }
    },

    postAuthor: async (req, res) => {

        const {name, nacionalty} = req.body

        try {
            const newAuthor = await authorService.create(name, nacionalty);
            res.status(201).json({response: newAuthor});
        } catch (error) {
            console.error('Error to create the author:', error);
            res.status(500).json({ error: error.message});
        }
    },

    deleteAuthors: async (req, res) => {

        const {name} = req.params;

        try {
            const deletedAuthor = await authorService.delete(name);
            res.status(200).json({response: deletedAuthor})
        } catch (error) {
            console.error('Error to delete the author:', error);
            res.status(500).json({ error: error.message});
        }
    },

    updateAuthor: async (req, res) => {

        const {id} = req.params;
        const {name, nacionalty} = req.body

        try {
            const updatedAuthor = await authorService.update(id, name, nacionalty);
            res.status(200).json({response: updatedAuthor});
        } catch (error) {
            console.error('Error to update the author:', error);
            res.status(500).json({ error: error.message});
        }
    }
}