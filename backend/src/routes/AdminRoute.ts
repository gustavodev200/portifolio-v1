import express from "express";
import UserAdminController from "../controllers/UserAdminController";

const router = express.Router();

router.post("/create", UserAdminController.create);
router.get("/admin");

export default router;
