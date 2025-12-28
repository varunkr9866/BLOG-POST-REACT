import mongoose from "mongoose";
import Blog from "../models/Blog.js";
import User from "../models/User.js";

export const getAllBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find().populate("user");
    res.status(200).json({ blogs });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const addBlog = async (req, res) => {
  const { title, description, image, user } = req.body;

  let existingUser;
  try {
    existingUser = await User.findById(user);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }

  if (!existingUser) {
    return res.status(400).json({ message: "User not found" });
  }

  const blog = new Blog({
    title,
    description,
    image,
    user,
  });

  try {
    const session = await mongoose.startSession();
    session.startTransaction();

    await blog.save({ session });
    existingUser.blogs.push(blog);
    await existingUser.save({ session });

    await session.commitTransaction();
    session.endSession();

    res.status(201).json({ blog });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const getBlogById = async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id).populate("user");
    if (!blog) return res.status(404).json({ message: "Blog not found" });
    res.status(200).json({ blog });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const deleteBlog = async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id).populate("user");
    if (!blog) return res.status(404).json({ message: "Blog not found" });

    await blog.user.blogs.pull(blog);
    await blog.user.save();
    await blog.deleteOne();

    res.status(200).json({ message: "Blog deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const getBlogsByUserId = async (req, res) => {
  try {
    const user = await User.findById(req.params.id).populate("blogs");
    if (!user) return res.status(404).json({ message: "User not found" });
    res.status(200).json({ blogs: user.blogs });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
