import { Router } from "express";
import { authorController } from "../controllers/crud.controller.js";

export const authorsRoutes = Router();

authorsRoutes.get("/", authorController.getAuthors);

authorsRoutes.post("/", authorController.postAuthor);

authorsRoutes.delete("/:name", authorController.deleteAuthors);

authorsRoutes.put("/:id", authorController.updateAuthor);