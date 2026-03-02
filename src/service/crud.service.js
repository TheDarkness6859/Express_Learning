import { pool } from "../configuration/postgres.js";

export const authorService = {

    getAll: async () => {
        try {
            const res = await pool.query("SELECT * FROM practice.author ORDER BY name ASC");
            return res.rows;
        } catch (error) {
            console.error("Error to get all authors");
            throw error;
        }
        
    },

    getById: async (name) => {
        try {
            const res = await pool.query("SELECT get_author_id($1) as id", [name]);
            return res.rows[0];
        } catch (error) {
            console.log("Error to get the author")
            throw error;
        }

    },

    create: async (name, nacionalty) => {
        try {
            const query = "INSERT INTO practice.author (name, nacionalty) VALUES ($1, $2) RETURNING *"
            const res = await pool.query(query, [name, nacionalty]);
            return res.rows[0];
        } catch (error) {
            console.log("Error to create the author")
            throw error;           
        }
    },

    delete: async (name) => {
        try {
            const res = await pool.query("DELETE FROM practice.author where name = $1 RETURNING *", [name]);
            return res.rows[0];
        } catch (error) {
            console.log("Error to delete the author")
            throw error;  
        }
    },

    deleteById: async (id) => {
        try {
            const res = await pool.query("DELETE FROM practice.author where id = $1 RETURNING *", [id]);
            return res.rows[0];
        } catch (error) {
            console.log("Error to delete the author")
            throw error;  
        }
    },

    update: async (id, name, nacionalty) => {
        try {
            const query ="UPDATE practice.author SET name = $1, nacionalty = $2 WHERE id = $3 RETURNING *";
            const res = await pool.query(query, [name, nacionalty, id]);
            return res.rows[0];
        } catch (error) {
            console.log("Error to update the author")
            throw error;              
        }
    }
}