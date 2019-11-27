import React, { Component } from "react";
import ReactQuill, { Quill, Mixin, Toolbar } from "react-quill";
import { Card, CardBody, Form, FormInput } from "shards-react";

import axios from "axios";

import "react-quill/dist/quill.snow.css";
import "../../assets/quill.css";
// const BASE_URL = "http://localhost:8083/src/assets";

class Editor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      description: "",
      profileImg: ""
    };
    // this.fileInput = React.createRef();

    this.onChangeHandler = this.onChangeHandler.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange = e => {
    const target = e.target;
    const name = target.name;
    const value = target.value;
    this.setState({
      [name]: value
    });
  };

  onChangeHandler = e => {
    this.setState({
      profileImg: e.target.files[0]
    });
    console.log(e.target.files[0]);
  };

  handleSubmit = e => {
    e.preventDefault();
    //console.log(this.fileInput.current.files[0].name);

    // const data = {
    //   title: this.state.title,
    //   description: this.state.description,
    //   profileImg: (this.state.profileImg, this.state.profileImg.name)
    // };

    const data = new FormData();
    data.append("profileImg", this.state.profileImg);
    data.append("title", this.state.title);
    data.append("description", this.state.description);
    //data.append("image", this.state.profileImg, this.state.profileImg.name);
    console.log(this.state);
    axios
      .post("http://localhost:8082/api/posts", data, {})
      .then(res => {
        this.setState({
          title: "",
          description: "",
          profileImg: ""
        });
        //this.props.history.push("/blog-posts");
      })
      .catch(err => {
        console.log("Error in CreatePost!");
      });
  };
  render() {
    return (
      <Card small className="mb-3">
        <CardBody>
          <Form
            id="form1"
            className="add-new-post"
            onSubmit={this.handleSubmit}
          >
            <FormInput
              type="text"
              placeholder="Title of the Post"
              name="title"
              className="form-control"
              value={this.state.title}
              onChange={this.handleInputChange}
              size="lg"
              className="mb-3"
              placeholder="Your Post Title"
            />
            {/* <FormInput
              type="text"
              placeholder="Describe this Post"
              name="description"
              className="form-control add-new-post__editor mb-1"
              value={this.state.description}
              onChange={this.handleInputChange}
            /> */}
            <textarea
              type="text"
              placeholder="Describe this Post"
              name="description"
              className="form-control add-new-post__editor mb-1"
              onChange={this.handleInputChange}
              value={this.state.description}
            />
            <input
              className="form-control "
              //ref={this.fileInput}
              onChange={this.onChangeHandler}
              type="file"
              accept="image/*"
            />
            <br />

            <input
              type="submit"
              className="btn btn-outline-warning btn-block mt-4"
            />
          </Form>
        </CardBody>
      </Card>
    );
  }
}

export default Editor;
