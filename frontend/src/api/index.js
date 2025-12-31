import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api",
});

export const fetchBlogs = () => API.get("/blog");
export const fetchBlogById = (id) => API.get(`/blog/${id}`);
