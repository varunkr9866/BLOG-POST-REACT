import mongoose from "mongoose";
import Blog from "../model/Blog.js";
import User from "../model/User.js";

export const getAllBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find().populate("user", "name email");
    return res.status(200).json({ blogs });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

export const addBlog = async (req, res) => {
  const { title, description, image, user } = req.body;

  if (!mongoose.Types.ObjectId.isValid(user)) {
    return res.status(400).json({ message: "Invalid user ID" });
  }

  let existingUser;
  try {
    existingUser = await User.findById(user);
    if (!existingUser) {
      return res.status(404).json({ message: "User not found" });
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }

  const blog = new Blog({
    title,
    description,
    image,
    user,
  });

  const session = await mongoose.startSession();
  session.startTransaction();

  try {
    await blog.save({ session });
    existingUser.blogs.push(blog._id);
    await existingUser.save({ session });

    await session.commitTransaction();
    session.endSession();

    return res.status(201).json({ blog });
  } catch (err) {
    await session.abortTransaction();
    session.endSession();
    return res.status(500).json({ message: err.message });
  }
};

export const getBlogById = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ message: "Invalid blog ID" });
  }

  try {
    const blog = await Blog.findById(id).populate("user", "name email");
    if (!blog) {
      return res.status(404).json({ message: "Blog not found" });
    }

    return res.status(200).json({ blog });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

export const deleteBlog = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ message: "Invalid blog ID" });
  }

  const session = await mongoose.startSession();
  session.startTransaction();

  try {
    const blog = await Blog.findById(id).populate("user").session(session);

    if (!blog || !blog.user) {
      await session.abortTransaction();
      session.endSession();
      return res.status(404).json({ message: "Blog not found" });
    }

    blog.user.blogs.pull(blog._id);
    await blog.user.save({ session });

    await blog.deleteOne({ session });

    await session.commitTransaction();
    session.endSession();

    return res.status(200).json({ message: "Blog deleted successfully" });
  } catch (err) {
    await session.abortTransaction();
    session.endSession();
    return res.status(500).json({ message: err.message });
  }
};

export const getBlogsByUserId = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ message: "Invalid user ID" });
  }

  try {
    const user = await User.findById(id).populate("blogs");
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    return res.status(200).json({ blogs: user.blogs });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};
