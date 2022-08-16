import express from "express";
import cors from "cors";
import { getUser, getUserById } from "../controllers/UserContr.js";

const router = express.Router();

router.use("/users", getUser);
router.use("/users/:id", getUserById);

export default router;
