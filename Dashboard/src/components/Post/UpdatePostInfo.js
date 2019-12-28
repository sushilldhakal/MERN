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
  Container
} from "shards-react";
import axios from "axios";

import PageTitle from "../common/PageTitle";
import CKEditor from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

class UpdatePostInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      post: {},
      title: "",
      description: "",
      profileImg: "",
      status: "",
      visibility: "",
      schedule: "",
      readability: "ok",
      uncategorized: false,
      design: false,
      development: false,
      writing: false
    };
    this.onChangeHandler = this.onChangeHandler.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleTextareaChange = this.handleTextareaChange.bind(this);
    this.handleCategories = this.handleCategories.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleCategories = name => e => {
    this.setState({
      [name]: e.target.checked
    });
  };

  handleInputChange = e => {
    const target = e.target;
    const name = target.name;
    const value = target.value;
    this.setState({
      [name]: value
    });
  };
  handleTextareaChange = (e, editor) => {
    const data = editor.getData();
    this.setState({
      description: data
    });
  };

  onChangeHandler = e => {
    this.setState({
      profileImg: e.target.files[0]
    });
  };

  componentDidMount() {
    axios
      .get("http://localhost:8082/api/posts/" + this.props.match.params.id)
      .then(res => {
        this.setState({
          title: res.data.title,
          description: res.data.description,
          profileImg: res.data.profileImg,
          status: res.data.status,
          visibility: res.data.visibility,
          schedule: res.data.schedule,
          readability: res.data.readability,
          uncategorized: res.data.uncategorized,
          design: res.data.design,
          development: res.data.development,
          writing: res.data.writing
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
      readability: this.state.readability,
      uncategorized: this.state.uncategorized,
      design: this.state.design,
      development: this.state.development,
      writing: this.state.writing
    };
    axios
      .put(
        "http://localhost:8082/api/posts/" + this.props.match.params.id,
        data
      )
      .then(res => {
        this.props.history.push("/blog-posts/");
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
                    name="title"
                    className="form-control mb-3"
                    value={this.state.title}
                    onChange={this.handleInputChange}
                    size="lg"
                    placeholder="Your Post Title"
                  />
                  <CKEditor
                    editor={ClassicEditor}
                    data={this.state.description}
                    placeholder="Description"
                    onInit={editor => {
                      // You can store the "editor" and use when it is needed.
                      console.log("Editor is ready to use!", editor);
                    }}
                    onChange={this.handleTextareaChange}
                    config={{
                      ckfinder: {
                        uploadUrl:
                          "http://localhost:8082/public/ckfinder/core/connector/php/connector.php?command=QuickUpload&type=Images&responseType=json"
                      }
                    }}
                  />

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
                        checked={this.state.uncategorized}
                        onChange={this.handleCategories("uncategorized")}
                        value="uncategorized"
                      >
                        Uncategorized
                      </FormCheckbox>
                      <FormCheckbox
                        className="mb-1"
                        name="Design"
                        checked={this.state.design}
                        onChange={this.handleCategories("design")}
                        value="design"
                      >
                        Design
                      </FormCheckbox>
                      <FormCheckbox
                        name="Development"
                        checked={this.state.development}
                        className="mb-1"
                        value="development"
                        onChange={this.handleCategories("development")}
                      >
                        Development
                      </FormCheckbox>
                      <FormCheckbox
                        name="Writing"
                        checked={this.state.writing}
                        onChange={this.handleCategories("writing")}
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
