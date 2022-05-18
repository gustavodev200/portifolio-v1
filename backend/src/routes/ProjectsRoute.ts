import express from "express";
import ProjectController from "../controllers/ProjectController";
import verifyToken from "../helpers/verify-token";

const router = express.Router();

router.post("/admin/add-project", verifyToken, ProjectController.addProject);

module.exports = router;
