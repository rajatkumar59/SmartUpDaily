import express from "express";
import { google, signup } from "../controllers/auth.controller.js";
import { login } from "../controllers/auth.controller.js";

const router = express.Router();

router.post("/login", login); 

router.post("/signup", signup);

router.post("/google", google);

export default router;