import express from "express";
import cors from "cors";
import {
  getUser,
  getUserById,
  createUser,
  updateUser,
} from "../controllers/UserContr.js";

const router = express.Router();

router.get("/users", getUser);
router.get("/users/:id", getUserById);
router.post("/users", createUser);
router.patch("/users/:id", updateUser);

export default router;
