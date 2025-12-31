import React from "react";
import { Link } from "react-router-dom";


export default function Post() {
  return (
    <div>
      {" "}
      <header
        className="masthead"
        myStyle={"background-image: url('assets/img/post-bg.jpg')"}
      >
        <div className="container position-relative px-4 px-lg-5">
          <div className="row gx-4 gx-lg-5 justify-content-center">
            <div className="col-md-10 col-lg-8 col-xl-7">
              <div className="post-heading">
                <h1>
                  Man must explore, and this is exploration at its greatest
                </h1>
                <h2 className="subheading">
                  Problems look mighty small from 150 miles up
                </h2>
                <span className="meta">
                  Posted by
                  <Link to="#!">Start Bootstrap</Link>
                  on August 24, 2023
                </span>
              </div>
            </div>
          </div>
        </div>
      </header>
      {/* <!-- Post Content--> */}
      <article className="mb-4">
        <div className="container px-4 px-lg-5">
          <div className="row gx-4 gx-lg-5 justify-content-center">
            <div className="col-md-10 col-lg-8 col-xl-7">
              <h2 className="section-heading">The Final Frontier</h2>

              <Link to="#!">
                <img
                  className="img-fluid"
                  src="assets/img/post-sample-image.jpg"
                  alt="..."
                />
              </Link>
              <span className="caption text-muted">
                To go places and do things that have never been done before –
                that’s what living is all about.
              </span>
              <p>
                Space, the final frontier. These are the voyages of the Starship
                Enterprise. Its five-year mission: to explore strange new
                worlds, to seek out new life and new civilizations, to boldly go
                where no man has gone before.
              </p>
              <p>
                As I stand out here in the wonders of the unknown at Hadley, I
                sort of realize there’s a fundamental truth to our nature, Man
                must explore, and this is exploration at its greatest.
              </p>
              <p>
                Placeholder text by
                <Link to="http://spaceipsum.com/">Space Ipsum</Link>
                &middot; Images by
                <Link to="https://www.flickr.com/photos/nasacommons/">
                  NASA on The Commons
                </Link>
              </p>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}