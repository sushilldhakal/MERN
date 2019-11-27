import React, { Component } from "react";
import {
  Row,
  Col,
  Card,
  CardBody,
  Form,
  FormInput,
  ListGroup,
  ListGroupItem,
  Button,
  CardHeader,
  InputGroup,
  InputGroupAddon,
  FormCheckbox,
  Container,
  CardFooter,
  Badge
} from "shards-react";
import axios from "axios";
import ReactQuill, { Quill, Mixin, Toolbar } from "react-quill";
import "react-quill/dist/quill.snow.css";
import "../../assets/quill.css";

import { Link } from "react-router-dom";
import PageTitle from "../common/PageTitle";

class UpdatePostInfo extends Component {
  constructor(props) {
    super(props);
    this.modules = {
      toolbar: [
        [{ font: [] }],
        [{ size: ["small", false, "large", "huge"] }],
        ["bold", "italic", "underline"],
        [{ list: "ordered" }, { list: "bullet" }],
        [{ align: [] }],
        [{ color: [] }, { background: [] }],
        ["clean"]
      ]
    };

    this.formats = [
      "font",
      "size",
      "bold",
      "italic",
      "underline",
      "list",
      "bullet",
      "align",
      "color",
      "background"
    ];

    this.state = {
      post: {},
      title: "",
      description: "",
      profileImg: "",
      status: "",
      visibility: "",
      schedule: "",
      readability: "ok"
    };
    this.onChangeHandler = this.onChangeHandler.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleTextareaChange = this.handleTextareaChange.bind(this);
  }
  handleInputChange = e => {
    const target = e.target;
    const name = target.name;
    const value = target.value;
    this.setState({
      [name]: value
    });
  };

  handleTextareaChange = (content, delta, source, editor) => {
    // console.log(editor.getHTML()); // rich text
    // console.log(editor.getText()); // plain text
    // console.log(editor.getLength()); // number of characters
    this.setState({
      description: editor.getHTML()
    });
  };

  // (value) {
  //   this.setState({ description: value });
  // }

  onChangeHandler = e => {
    this.setState({
      profileImg: e.target.files[0]
    });
    console.log(e.target.files[0]);
  };

  componentDidMount() {
    //console.log("Print id: " + this.props.match.params.id);
    axios
      .get("http://localhost:8082/api/posts/" + this.props.match.params.id)
      .then(res => {
        // this.setState({...this.state, post: res.data})
        this.setState({
          title: res.data.title,
          description: res.data.description,
          profileImg: res.data.profileImg,
          status: res.data.status,
          visibility: res.data.visibility,
          schedule: res.data.schedule,
          readability: res.data.readability
        });
      })
      .catch(err => {
        console.log("Error from UpdatePostInfo");
      });
  }

  onDeleteClick(id) {
    axios
      .delete("http://localhost:8082/api/posts/" + this.props.match.params.id)
      .then(res => {
        this.props.history.push("/blog-posts");
      })
      .catch(err => {
        console.log("Error form ShowPostDetails_deleteClick");
      });
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();

    const data = {
      title: this.state.title,
      description: this.state.description,
      profileImg: this.state.profileImg,
      status: this.state.status,
      visibility: this.state.visibility,
      schedule: this.state.schedule,
      readability: this.state.readability
    };
    // data.append("profileImg", this.state.profileImg);
    // data.append("title", this.state.title);
    // data.append("description", this.state.description);
    // data.append("status", this.state.status);
    // data.append("visibility", this.state.visibility);
    // data.append("schedule", this.state.schedule);
    // data.append("readability", this.state.readability);
    //data.append("image", this.state.profileImg, this.state.profileImg.name);
    //console.log(this.state);
    axios
      .put(
        "http://localhost:8082/api/posts/" + this.props.match.params.id,
        data
      )
      .then(res => {
        console.log(this.state);
        alert("updated sucessfully");
        //this.props.history.push("/blog-posts/");
      })
      .catch(err => {
        console.log("Error in UpdatePostInfo!");
      });
  };

  render() {
    const post = this.state.post;
    return (
      <Container fluid className="main-content-container px-4">
        {/* Page Header */}
        <Row noGutters className="page-header py-4">
          <PageTitle
            sm="4"
            title={this.state.title}
            subtitle="Post"
            className="text-sm-left"
          />
        </Row>
        <Row>
          {/* Editor */}
          <Form
            id="form1"
            className="add-new-post"
            onSubmit={this.handleSubmit}
          >
            <Col lg="9" md="12">
              <Card small className="mb-3">
                <CardBody>
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
                  <ReactQuill
                    className="add-new-post__editor mb-1 form-control add-new-post__editor mb-"
                    theme="snow"
                    placeholder="Describe this Post"
                    name="description"
                    // modules={this.modules}
                    // formats={this.formats}
                    value={this.state.description}
                    onChange={this.handleTextareaChange || ""}
                  />
                  {/* <textarea
                  type="text"
                  placeholder="Describe this Post"
                  name="description"
                  className="form-control add-new-post__editor mb-1"
                  onChange={this.handleInputChange}
                  value={this.state.description}
                /> */}
                  <div className="custom-file mb-3">
                    <input
                      onChange={this.onChangeHandler}
                      type="file"
                      accept="image/*"
                      name="Choose Image"
                      className="custom-file-input"
                      id="customFile2"
                    />
                    <label className="custom-file-label" htmlFor="customFile2">
                      Choose image...
                    </label>
                  </div>
                  {/* <input
                    className="form-control "
                    //ref={this.fileInput}
                    onChange={this.onChangeHandler}
                    type="file"
                    accept="image/*"
                    name="Choose Image"
                  /> */}
                  <br />
                </CardBody>
              </Card>
            </Col>

            {/* Sidebar Widgets */}
            <Col lg="3" md="12">
              <Card small className="mb-3">
                <CardHeader className="border-bottom">
                  <h6 className="m-0">Actions</h6>
                </CardHeader>
                <CardBody className="p-0">
                  <ListGroup flush>
                    <ListGroupItem className="p-3">
                      <span className="d-flex mb-2">
                        <i className="material-icons mr-1">flag</i>
                        <strong className="mr-1">Status:</strong>
                        <select
                          name="status"
                          value={this.state.status}
                          onChange={this.handleInputChange}
                          id="statusSelect"
                        >
                          <option value="Draft">Draft</option>
                          <option value="Publish">Publish</option>
                        </select>
                      </span>
                      <span className="d-flex mb-2">
                        <i className="material-icons mr-1">visibility</i>
                        <strong className="mr-1">Visibility:</strong>
                        <select
                          name="visibility"
                          value={this.state.visibility}
                          onChange={this.handleInputChange}
                          id="selectVisibility"
                        >
                          <option value="Public">Public</option>
                          <option value="Private">Private</option>
                        </select>
                      </span>
                      <span className="d-flex mb-2">
                        <i className="material-icons mr-1">calendar_today</i>
                        <strong className="mr-1">Schedule:</strong>
                        <select
                          name="schedule"
                          value={this.state.schedule}
                          onChange={this.handleInputChange}
                          id="selectSchedule"
                        >
                          <option value="Now">Now</option>
                          <option value="OtherDate">OtherDate</option>
                        </select>
                      </span>
                      <span className="d-flex">
                        <i className="material-icons mr-1">score</i>
                        <strong name="Readability" value="Ok" className="mr-1">
                          Readability:
                        </strong>
                        <strong className="text-warning">Ok</strong>
                      </span>
                    </ListGroupItem>
                    <ListGroupItem className="d-flex px-3 border-0">
                      {/* <Button outline theme="accent" size="sm">
                        Save Draft
                      </Button> */}
                      <Button
                        type="button"
                        size="sm"
                        theme="danger"
                        onClick={this.onDeleteClick.bind(this, post._id)}
                      >
                        <i className="material-icons">delete</i>Delete Post
                      </Button>
                      <Button
                        theme="accent"
                        size="sm"
                        className="ml-auto"
                        type="submit"
                      >
                        <i className="material-icons">file_copy</i> Update
                      </Button>
                    </ListGroupItem>
                  </ListGroup>
                </CardBody>
              </Card>

              <Card small className="mb-3">
                <CardHeader className="border-bottom">
                  <h6 className="m-0">Categories</h6>
                </CardHeader>
                <CardBody className="p-0">
                  <ListGroup flush>
                    <ListGroupItem className="px-3 pb-2">
                      <FormCheckbox
                        className="mb-1"
                        name="uncategorized"
                        value={this.state.uncategorized}
                        onChange={this.handleInputChange}
                      >
                        Uncategorized
                      </FormCheckbox>
                      <FormCheckbox
                        className="mb-1"
                        name="Design"
                        value={this.state.design}
                        onChange={this.handleInputChange}
                      >
                        Design
                      </FormCheckbox>
                      <FormCheckbox
                        name="Dedevelopmentsign"
                        value={this.state.development}
                        onChange={this.handleInputChange}
                        className="mb-1"
                        value="development"
                      >
                        Development
                      </FormCheckbox>
                      <FormCheckbox
                        name="Writing"
                        value={this.state.writing}
                        onChange={this.handleInputChange}
                        className="mb-1"
                        value="writing"
                      >
                        Writing
                      </FormCheckbox>
                    </ListGroupItem>

                    <ListGroupItem className="d-flex px-3">
                      <InputGroup className="ml-auto">
                        <FormInput placeholder="New category" />
                        <InputGroupAddon type="append">
                          <Button theme="white" className="px-2">
                            <i className="material-icons">add</i>
                          </Button>
                        </InputGroupAddon>
                      </InputGroup>
                    </ListGroupItem>
                  </ListGroup>
                </CardBody>
              </Card>
            </Col>
          </Form>
        </Row>
      </Container>
    );
  }
}

export default UpdatePostInfo;

// import React, { Component } from "react";
// import { Link } from "react-router-dom";
// import axios from "axios";

// class UpdatePostInfo extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       title: "",
//       description: ""
//     };
//   }

//   componentDidMount() {
//     // console.log("Print id: " + this.props.match.params.id);
//     axios
//       .get("http://localhost:8082/api/posts/" + this.props.match.params.id)
//       .then(res => {
//         // this.setState({...this.state, post: res.data})
//         this.setState({
//           title: res.data.title,
//           description: res.data.description
//         });
//       })
//       .catch(err => {
//         console.log("Error from UpdatePostInfo");
//       });
//   }

//   onChange = e => {
//     this.setState({ [e.target.name]: e.target.value });
//   };

//   onSubmit = e => {
//     e.preventDefault();

//     const data = {
//       title: this.state.title,
//       description: this.state.description
//     };

//     axios
//       .put(
//         "http://localhost:8082/api/posts/" + this.props.match.params.id,
//         data
//       )
//       .then(res => {
//         this.props.history.push("/blog-posts/");
//       })
//       .catch(err => {
//         console.log("Error in UpdatePostInfo!");
//       });
//   };

//   render() {
//     return (
//       <div className="UpdatePostInfo">
//         <div className="container">
//           <div className="row">
//             <div className="col-md-8 m-auto">
//               <br />
//               <Link to="/" className="btn btn-outline-warning float-left">
//                 Show post List
//               </Link>
//             </div>
//             <div className="col-md-8 m-auto">
//               <h1 className="display-4 text-center">Edit post</h1>
//               <p className="lead text-center">Update post's Info</p>
//             </div>
//           </div>

//           <div className="col-md-8 m-auto">
//             <form noValidate onSubmit={this.onSubmit}>
//               <div className="form-group">
//                 <label htmlFor="title">Title</label>
//                 <input
//                   type="text"
//                   placeholder="Title of the post"
//                   name="title"
//                   className="form-control"
//                   value={this.state.title}
//                   onChange={this.onChange}
//                 />
//               </div>
//               <br />

//               <div className="form-group">
//                 <label htmlFor="description">Description</label>
//                 <input
//                   type="text"
//                   placeholder="Describe this post"
//                   name="description"
//                   className="form-control"
//                   value={this.state.description}
//                   onChange={this.onChange}
//                 />
//               </div>

//               <button
//                 type="submit"
//                 className="btn btn-outline-info btn-lg btn-block"
//               >
//                 Update post
//               </button>
//             </form>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

// export default UpdatePostInfo;
