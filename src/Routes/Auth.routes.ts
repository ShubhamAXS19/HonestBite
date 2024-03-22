import express from "express";
import { login, logout, register } from "../Controllers/Auth.controllers";

const router = express.Router();

router.get("/login", login);
router.get("/logout", logout);
router.post("/register", register);

export default router;
