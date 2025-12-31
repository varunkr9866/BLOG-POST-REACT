import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

export default function Post() {
  const { id } = useParams(); // blog id from URL
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/blog/${id}`)
      .then((res) => {
        setBlog(res.data.blog); // depends on controller response
      })
      .catch((err) => console.error(err));
  }, [id]);

  if (!blog) {
    return <h2 className="text-center mt-5">Loading...</h2>;
  }

  return (
    <div>
      {/* Header */}
      <header
        className="masthead"
        style={{
          backgroundImage: `url(${blog.image})`,
        }}
      >
        <div className="container position-relative px-4 px-lg-5">
          <div className="row justify-content-center">
            <div className="col-md-10 col-lg-8 col-xl-7">
              <div className="post-heading">
                <h1>{blog.title}</h1>
                <span className="meta">
                  Posted by{" "}
                  <Link to="#!">{blog.user?.name || "Author"}</Link>
                </span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Blog Content */}
      <article className="mb-4">
        <div className="container px-4 px-lg-5">
          <div className="row justify-content-center">
            <div className="col-md-10 col-lg-8 col-xl-7">
              <img
                className="img-fluid mb-4"
                src={blog.image}
                alt={blog.title}
              />

              <p>{blog.description}</p>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}
