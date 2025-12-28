import React, { useState } from "react";

export default function AddBlog() {
  const userId = localStorage.getItem("userId"); // must exist

  const [blog, setBlog] = useState({
    title: "",
    image: "",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBlog({ ...blog, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("http://localhost:3000/api/blog/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...blog,
        user: userId,
      }),
    });

    const data = await response.json();
    console.log(data);

    setBlog({
      title: "",
      image: "",
      description: "",
    });
  };

  return (
    <main className="container mt-5">

      <h2>Create Blog</h2>
      <header
        className="masthead"
        style={{ backgroundImage: "url('/assets/img/about-bg.jpg')" }}
      >
        <div className="container position-relative px-4 px-lg-5">
          <div className="row gx-4 gx-lg-5 justify-content-center">
            <div className="col-md-10 col-lg-8 col-xl-7">
              <div className="page-heading">
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
