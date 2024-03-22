import express from "express";
import { createPost, getPosts } from "../Controllers/Post.controllers";
const router = express.Router();

router.get("/", getPosts);

router.post("/newPost", createPost);

export default router;
