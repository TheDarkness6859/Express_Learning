import { mongoController } from "../controllers/crudmon.controller.js";
import { Router } from "express";

const mongoRoutes = Router();

mongoRoutes.get("/mongo", mongoController.getAuthors);

mongoRoutes.post("/mongo", mongoController.postAuthor);

mongoRoutes.delete("/mongo/:id", mongoController.deleteAuthor);

mongoRoutes.put("/mongo/:id", mongoController.updateAuthor);

export default mongoRoutes;