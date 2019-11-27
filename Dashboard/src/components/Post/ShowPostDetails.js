import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import PageTitle from "../common/PageTitle";
import {
  Row,
  Col,
  Card,
  Container,
  CardBody,
  Form,
  FormInput,
  ListGroup,
  ListGroupItem,
  Button,
  CardHeader,
  InputGroup,
  InputGroupAddon,
  FormCheckbox
} from "shards-react";

import ReactQuill, { Quill, Mixin, Toolbar } from "react-quill";
import "react-quill/dist/quill.snow.css";
import "../../assets/quill.css";

class showPostDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      post: {}
    };
  }

  componentDidMount() {
    // console.log("Print id: " + this.props.match.params.id);
    axios
      .get("http://localhost:8082/api/posts/" + this.props.match.params.id)
      .then(res => {
        // console.log("Print-showPostDetails-API-response: " + res.data);
        this.setState({
          post: res.data
        });
      })
      .catch(err => {
        console.log("Error from ShowPostDetails");
      });
  }

  onDeleteClick(id) {
    axios
      .delete("http://localhost:8082/api/posts/" + id)
      .then(res => {
        this.props.history.push("/blog-posts");
      })
      .catch(err => {
        console.log("Error form ShowPostDetails_deleteClick");
      });
  }

  render() {
    const post = this.state.post;
    let PostItem = (
      <Row>
        {/* Editor */}
        <Form id="form1" className="add-new-post" onSubmit={this.handleSubmit}>
          <Col lg="9" md="12">
            <Card small className="mb-3">
              <CardBody>
                <FormInput
                  type="text"
                  placeholder="Title of the Post"
                  name="title"
                  className="form-control"
                  value={post.title}
                  onChange={this.handleInputChange}
                  size="lg"
                  className="mb-3"
                  placeholder="Your Post Title"
                />
                {/* <ReactQuill
                  className="add-new-post__editor mb-1"
                  theme="snow"
                  modules={this.modules}
                  formats={this.formats}
                  value={this.state.description}
                  onChange={this.handleTextareaChange || ""}
                /> */}
                {/* <textarea
                type="text"
                placeholder="Describe this Post"
                name="description"
                className="form-control add-new-post__editor mb-1"
                onChange={this.handleInputChange}
                value={this.state.description}
              /> */}
                <input
                  className="form-control "
                  //ref={this.fileInput}
                  onChange={this.onChangeHandler}
                  type="file"
                  accept="image/*"
                  name="Choose Image"
                />
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
                    <Button outline theme="accent" size="sm">
                      <i className="material-icons">save</i> Save Draft
                    </Button>
                    <Button
                      theme="accent"
                      size="sm"
                      className="ml-auto"
                      type="submit"
                    >
                      <i className="material-icons">file_copy</i> Publish
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
    );

    return (
      <Container fluid className="main-content-container px-4">
        {/* Page Header */}
        <Row noGutters className="page-header py-4">
          <PageTitle
            sm="4"
            title={post.title}
            subtitle="Post"
            className="text-sm-left"
          />
          <Col md="4" sm="12" className="mb-4 float-right">
            <Link
              to={`/edit-post/${post._id}`}
              className="mb-2 mr-1 btn btn-primary"
            >
              Edit post
            </Link>
          </Col>
        </Row>

        <div className="ShowPostDetails">
          <div className="container">
            <div>{PostItem}</div>

            <div className="row">
              <div className="col-md-6">
                <button
                  type="button"
                  className="mb-2 mr-1 btn btn-danger"
                  onClick={this.onDeleteClick.bind(this, post._id)}
                >
                  Delete Post
                </button>
                <br />
              </div>
            </div>
            {/* <br />
            <button type="button" class="btn btn-outline-info btn-lg btn-block">Edit Post</button>
            <button type="button" class="btn btn-outline-danger btn-lg btn-block">Delete Post</button> */}
          </div>
        </div>
      </Container>
    );
  }
}

export default showPostDetails;
