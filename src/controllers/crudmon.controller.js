import { mongoService } from "../service/crudmon.service.js";

export const mongoController = {

    getAuthors: async (req, res) => {
        try {
            const authors = await mongoService.getAll();
            return res.status(200).json({response: authors});
        } catch (error) {
            console.error('Error to get the authors:', error);
            return res.status(500).json({error: error.message});
        }
    },

    postAuthor: async (req, res) => {
    
        const {name, nacionalty} = req.body

        try {
            const author = await mongoService.create(name, nacionalty);
            return res.status(201).json({response: author});
        } catch (error) {
            console.error('Error to create the author:', error);
            return res.status(500).json({error: error.message});
        }
    },

    updateAuthor: async (req, res) => {

        const {id} = req.params
        const {name, nacionalty} = req.body

        try {
            const updated = await mongoService.update(id, name, nacionalty);
            if (!updated) return res.status(404).json({ response: "No found" });
            res.status(200).json({response: updated});
        } catch (error) {
            console.error('Error to update the author:', error);
            return res.status(500).json({error: error.message});
        }
    },

    deleteAuthor: async (req, res) => {

        const {id} = req.params;

        try {
            const deleted = await mongoService.delete(id);
            if (!deleted) return res.status(404).json({ response: "No found" });
            return res.status(200).json({response: deleted})
        } catch (error) {
            console.error('Error to delete the author:', error);
            return res.status(500).json({error: error.message});
        }
    } 
}