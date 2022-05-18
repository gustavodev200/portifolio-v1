import express from "express";
import UserAdminController from "../controllers/UserAdminController";

const router = express.Router();

router.post("/create", UserAdminController.create);
router.post("/admin", UserAdminController.login);

module.exports = router;
