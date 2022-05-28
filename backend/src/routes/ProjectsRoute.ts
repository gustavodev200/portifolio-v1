import express from "express";
import ProjectController from "../controllers/ProjectController";
import verifyToken from "../helpers/verify-token";
const upload = require("../helpers/image-upload");
const router = express.Router();

router.post(
  "/admin/add-project",
  verifyToken,
  upload.single("project"),
  ProjectController.addProject
);

module.exports = router;
