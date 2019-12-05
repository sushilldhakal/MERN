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
  FormCheckbox
} from "shards-react";
import axios from "axios";

import CKEditor from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

class FinalPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
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
    // this.fileInput = React.createRef();

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
    console.log(this.state);
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
    console.log({ data });
    this.setState({
      description: data
    });
    console.log(this.state);
  };

  onChangeHandler = e => {
    this.setState({
      profileImg: e.target.files[0]
    });
    console.log(e.target.files[0]);
  };

  handleSubmit = e => {
    e.preventDefault();
    const data = new FormData();
    data.append("profileImg", this.state.profileImg);
    data.append("title", this.state.title);
    data.append("description", this.state.description);
    data.append("status", this.state.status);
    data.append("visibility", this.state.visibility);
    data.append("schedule", this.state.schedule);
    data.append("readability", this.state.readability);
    data.append("uncategorized", this.state.uncategorized);
    data.append("design", this.state.design);
    data.append("development", this.state.development);
    data.append("writing", this.state.writing);

    axios
      .post("http://localhost:8082/api/pages", data, {})
      .then(res => {
        this.setState({
          title: "",
          description: "",
          profileImg: "",
          status: "Draft",
          visibility: "Public",
          schedule: "Now",
          readability: "ok",
          uncategorized: false,
          design: false,
          development: false,
          writing: false
        });
        //this.props.history.push("/blog-pages");
      })
      .catch(err => {
        console.log("Error in Createpage!");
      });
  };

  render() {
    return (
      <Row>
        {/* Editor */}
        <Form id="form1" className="add-new-page" onSubmit={this.handleSubmit}>
          <Col lg="9" md="12">
            <Card small className="mb-3">
              <CardBody>
                <FormInput
                  type="text"
                  placeholder="Title of the Page"
                  name="title"
                  className="form-control mb-3"
                  value={this.state.title}
                  onChange={this.handleInputChange}
                  size="lg"
                />
                <CKEditor
                  editor={ClassicEditor}
                  data=""
                  placeholder="Description"
                  onInit={editor => {
                    console.log("Editor is ready to use!", editor);
                  }}
                  onChange={this.handleTextareaChange}
                  config={{
                    ckfinder: {
                      uploadUrl: "http://localhost/8082/backend/public"
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
                    choose image ....
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
    );
  }
}

export default FinalPage;
