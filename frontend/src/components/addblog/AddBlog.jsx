import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AddBlog() {
  const navigate = useNavigate();
  const userId = localStorage.getItem("userId"); // must exist

  const [blog, setBlog] = useState({
    title: "",
    image: "",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBlog((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "http://localhost:5000/api/blog/add", // ✅ correct port
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            ...blog,
            user: userId,
          }),
        }
      );

      const data = await response.json();
      console.log(data);

      if (response.ok) {
        alert("Blog added successfully");
        navigate("/blogs"); // optional redirect
      }
    } catch (error) {
      console.error("Error adding blog:", error);
    }

    setBlog({
      title: "",
      image: "",
      description: "",
    });
  };

  return (
    <main className="container mt-5">
      <header
        className="masthead mb-4"
        style={{ backgroundImage: "url('/assets/img/about-bg.jpg')" }}
      >
        <div className="container px-4 px-lg-5">
          <div className="row justify-content-center">
            <div className="col-md-10 col-lg-8 col-xl-7">
              <div className="page-heading text-center">
                <h1>Post a Blog</h1>
                <span className="subheading">
                  Write your thoughts and post.
                </span>
              </div>
            </div>
          </div>
        </div>
      </header>

      <form onSubmit={handleSubmit}>
        <input
          className="form-control mb-3"
          type="text"
          name="title"
          placeholder="Title"
          value={blog.title}
          onChange={handleChange}
          required
        />

        <input
          className="form-control mb-3"
          type="text"
          name="image"
          placeholder="Image URL"
          value={blog.image}
          onChange={handleChange}
          required
        />

        <textarea
          className="form-control mb-3"
          name="description"
          placeholder="Description"
          rows="5"
          value={blog.description}
          onChange={handleChange}
          required
        />

        <button className="btn btn-primary" type="submit">
          Add Blog
        </button>
      </form>
    </main>
  );
}
