import express from "express";
import cors from "cors";
import { getUser } from "../controllers/UserContr.js";

const router = express.Router();

router.use("/", getUser);

export default router;
