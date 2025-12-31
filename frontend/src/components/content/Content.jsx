import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchBlogs } from "../../api";


export default function Content() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchBlogs()
      .then((res) => {
        setBlogs(res.data.blogs);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <h2 className="text-center mt-5">Loading blogs...</h2>;
  }

  return (
    <div className="container px-4 px-lg-5">
      <div className="row gx-4 gx-lg-5 justify-content-center">
        <div className="col-md-10 col-lg-8 col-xl-7">

          {blogs.map((blog) => (
            <div key={blog._id}>
              <div className="post-preview">
                <Link to={`/post/${blog._id}`}>
                  <h2 className="post-title">{blog.title}</h2>
                  <h3 className="post-subtitle">
                    {blog.description.substring(0, 100)}...
                  </h3>
                </Link>

                <p className="post-meta">
                  Posted by{" "}
                  <Link to="#!">
                    {blog.user?.name || "Unknown"}
                  </Link>
                </p>
              </div>

              <hr className="my-4" />
            </div>
          ))}

          <div className="d-flex justify-content-end mb-4">
            <Link className="btn btn-primary text-uppercase" to="#!">
              Older Posts →
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
}
