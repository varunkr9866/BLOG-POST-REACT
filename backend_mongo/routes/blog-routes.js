import express from "express";
import {
  getAllBlogs,
  addBlog,
  getBlogById,
  deleteBlog,
  getBlogsByUserId,
} from "../controllers/blog-controller.js";

const router = express.Router();

router.get("/", getAllBlogs);
router.post("/add", addBlog);
router.get("/:id", getBlogById);
router.delete("/:id", deleteBlog);
router.get("/user/:id", getBlogsByUserId);

export default router;
