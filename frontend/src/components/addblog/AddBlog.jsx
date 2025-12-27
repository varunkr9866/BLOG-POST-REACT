import React, { useState } from "react";

export default function AddBlog() {
  const [blog, setBlog] = useState({
    user: "",
    image: "",
    title: "",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBlog((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(blog);

    // const response = fetch('')

    // Optional: reset form
    setBlog({
      user: "",
      image: "",
      title: "",
      description: "",
    });
  };

  return (
    <>
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

      <main className="mb-4">
        <div className="container px-4 px-lg-5">
          <div className="row gx-4 gx-lg-5 justify-content-center">
            <div className="col-md-10 col-lg-8 col-xl-7">
              <form onSubmit={handleSubmit} className="my-5">

                {/* Author */}
                <div className="form-floating mb-3">
                  <input
                    className="form-control"
                    type="text"
                    name="user"
                    placeholder="Enter your name..."
                    value={blog.user}
                    onChange={handleChange}
                    required
                  />
                  <label>Author</label>
                </div>

                {/* Image URL */}
                <div className="form-floating mb-3">
                  <input
                    className="form-control"
                    type="text"
                    name="image"
                    placeholder="Enter image URL..."
                    value={blog.image}
                    onChange={handleChange}
                    required
                  />
                  <label>Image URL</label>
                </div>

                {/* Title */}
                <div className="form-floating mb-3">
                  <input
                    className="form-control"
                    type="text"
                    name="title"
                    placeholder="Enter title..."
                    value={blog.title}
                    onChange={handleChange}
                    required
                  />
                  <label>Title</label>
                </div>

                {/* Description */}
                <div className="form-floating mb-3">
                  <textarea
                    className="form-control"
                    name="description"
                    placeholder="Enter description..."
                    style={{ height: "12rem" }}
                    value={blog.description}
                    onChange={handleChange}
                    required
                  />
                  <label>Description</label>
                </div>

                <button
                  className="btn btn-primary text-uppercase"
                  type="submit"
                >
                  Submit
                </button>

              </form>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
