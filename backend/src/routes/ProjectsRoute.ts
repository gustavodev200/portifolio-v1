import express from "express";
import ProjectController from "../controllers/ProjectController";

const router = express.Router();

router.post("/admin/add-project", ProjectController.addProject);

export default router;
