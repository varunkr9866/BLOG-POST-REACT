import React from "react";

export default function AddBlog() {
  return (
    <>
      <div>
        {/* Page Header */}
        <header
          className="masthead"
          style={{
            backgroundImage: "url('/assets/img/about-bg.jpg')",
          }}
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

        {/* Main Content */}
        <main className="mb-4">
          <div className="container px-4 px-lg-5">
            <div className="row gx-4 gx-lg-5 justify-content-center">
              <div className="col-md-10 col-lg-8 col-xl-7">
                <p>
                  Want to write your thoughts? Fill out the form below to post your content online!
                </p>

                <div className="my-5">
                  <form id="contactForm" data-sb-form-api-token="API_TOKEN">
                    <div className="form-floating">
                      <input
                        className="form-control"
                        id="name"
                        type="text"
                        placeholder="Enter your name..."
                        data-sb-validations="required"
                      />
                      <label htmlFor="Author">Author</label>
                      <div
                        className="invalid-feedback"
                        data-sb-feedback="name:required"
                      >
                        A Author is required.
                      </div>
                    </div>

                    <div className="form-floating">
                      <input
                        className="form-control"
                        id="name"
                        type="text"
                        placeholder="Enter your name..."
                        data-sb-validations="required"
                      />
                      <label htmlFor="image">Image URL</label>
                      <div
                        className="invalid-feedback"
                        data-sb-feedback="image:required"
                      >
                        A Image URL is required.
                      </div>
                    </div>

                    <div className="form-floating">
                      <input
                        className="form-control"
                        id="email"
                        type="email"
                        placeholder="Enter your email..."
                        data-sb-validations="required,email"
                      />
                      <label htmlFor="title">Title</label>
                      <div
                        className="invalid-feedback"
                        data-sb-feedback="title:required"
                      >
                        An Title is required.
                      </div>
                      <div
                        className="invalid-feedback"
                        data-sb-feedback="title:title"
                      >
                        Title is not valid.
                      </div>
                    </div>

                    <div className="form-floating">
                      <textarea
                        className="form-control"
                        id="message"
                        placeholder="Enter your message here..."
                        style={{ height: "12rem" }}
                        data-sb-validations="required"
                      ></textarea>
                      <label htmlFor="message">Description</label>
                      <div
                        className="invalid-feedback"
                        data-sb-feedback="message:required"
                      >
                        A Description is required.
                      </div>
                    </div>
                    <br />

                    <div className="d-none" id="submitSuccessMessage">
                      <div className="text-center mb-3">
                        <div className="fw-bolder">
                          Form submission successful!
                        </div>
                        To activate this form, sign up at
                        <br />
                        <a href="https://startbootstrap.com/solution/contact-forms">
                          https://startbootstrap.com/solution/contact-forms
                        </a>
                      </div>
                    </div>

                    <div className="d-none" id="submitErrorMessage">
                      <div className="text-center text-danger mb-3">
                        Error sending message!
                      </div>
                    </div>

                    {/* Submit Button */}
                    <button
                      className="btn btn-primary text-uppercase disabled"
                      id="submitButton"
                      type="submit"
                    >
                      Submit
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
