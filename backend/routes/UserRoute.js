import express from "express";
import cors from "cors";
import { getUser, getUserById, createUser } from "../controllers/UserContr.js";

const router = express.Router();

router.get("/users", getUser);
router.get("/users/:id", getUserById);
router.post("/users", createUser);

export default router;
