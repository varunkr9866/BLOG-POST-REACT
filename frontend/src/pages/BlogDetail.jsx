import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchBlogById } from "../api";

const BlogDetail = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    fetchBlogById(id)
      .then((res) => setBlog(res.data.blog))
      .catch((err) => console.error(err));
  }, [id]);

  if (!blog) return <h2 className="text-center">Loading...</h2>;

  return (
    <div className="container mt-5">
      <h1>{blog.title}</h1>
      <p className="text-muted">
        By {blog.user.name} ({blog.user.email})
      </p>
      <img src={blog.image} alt={blog.title} className="img-fluid mb-4" />
      <p>{blog.description}</p>
    </div>
  );
};

export default BlogDetail;
