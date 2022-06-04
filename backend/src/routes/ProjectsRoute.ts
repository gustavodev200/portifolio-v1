import express from "express";
import ProjectController from "../controllers/ProjectController";
import verifyToken from "../helpers/verify-token";
const upload = require("../helpers/image-upload");
const router = express.Router();

router.post(
  "/admin/dashboard",
  verifyToken,
  upload.array("image"),
  ProjectController.addProject
);

module.exports = router;
