import { Router } from "express";
import { authorController } from "../controllers/crud.controller.js";

export const authorsRoutes = Router();

router.get("/", authorController.getAuthors);

router.post("/", authorController.postAuthors);

router.delete("/:name", authorController.deleteAuthors);

router.put("/:id", authorController.updateAuthor);