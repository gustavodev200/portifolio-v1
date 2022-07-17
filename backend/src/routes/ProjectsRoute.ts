import express from "express";
import ProjectController from "../controllers/ProjectController";
import verifyToken from "../helpers/verify-token";
const upload = require("../helpers/image-upload");
const router = express.Router();

router.get("/", ProjectController.allProjects);
router.post(
  "/admin/dashboard",
  verifyToken,
  upload.single("image"),
  ProjectController.addProject
);

module.exports = router;
