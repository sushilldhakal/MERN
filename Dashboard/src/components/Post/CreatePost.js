import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../../App.css";
import axios from "axios";

import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

class CreatePost extends Component {
  constructor() {
    super();
    this.state = {
      title: "",
      description: ""
    };
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();

    const data = {
      title: this.state.title,
      description: this.state.description
    };

    axios
      .post("http://localhost:8082/api/posts", data)
      .then(res => {
        this.setState({
          title: "",
          description: ""
        });
        this.props.history.push("/blog-posts");
      })
      .catch(err => {
        console.log("Error in CreatePost!");
      });
  };

  render() {
    return (
      <div className="CreatePost">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <br />
              <Link to="/" className="btn btn-outline-warning float-left">
                Show Post List
              </Link>
            </div>
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Add Post</h1>
              <p className="lead text-center">Create new post</p>

              <form noValidate onSubmit={this.onSubmit}>
                <div className="form-group">
                  <input
                    type="text"
                    placeholder="Title of the Post"
                    name="title"
                    className="form-control"
                    value={this.state.title}
                    onChange={this.onChange}
                  />
                </div>
                <br />
                <div className="form-group">
                  <input
                    type="text"
                    placeholder="Describe this Post"
                    name="description"
                    className="form-control"
                    value={this.state.description}
                    onChange={this.onChange}
                  />
                </div>

                <input
                  type="submit"
                  className="btn btn-outline-warning btn-block mt-4"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CreatePost;
