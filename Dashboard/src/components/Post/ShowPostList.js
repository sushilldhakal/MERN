import React, { Component } from "react";
import "../../App.css";
import axios from "axios";
import { Link } from "react-router-dom";
import PostCard from "./PostCard";

class ShowPostList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:8082/api/posts")
      .then(res => {
        this.setState({
          posts: res.data
        });
      })
      .catch(err => {
        console.log("Error from ShowPostList");
      });
  }

  render() {
    const posts = this.state.posts;
    console.log("PrintPost: " + posts);
    let postList;

    if (!posts) {
      postList = "there is no post recored!";
    } else {
      postList = posts.map((post, k) => <PostCard post={post} key={k} />);
    }

    return (
      <div className="ShowPostList">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <br />
              <h2 className="display-4 text-center">posts List</h2>
            </div>

            <div className="col-md-11">
              <Link
                to="/create-post"
                className="btn btn-outline-warning float-right"
              >
                + Add New Post
              </Link>
              <br />
              <br />
              <hr />
            </div>
          </div>

          <div className="list">{postList}</div>
        </div>
      </div>
    );
  }
}

export default ShowPostList;
