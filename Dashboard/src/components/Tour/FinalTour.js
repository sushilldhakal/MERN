import React, { Component, useEffect, useState } from "react";
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
  FormTextarea
} from "shards-react";
import axios from "axios";

import CKEditor from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import "./tour.css";

import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

import DropzoneComponent from "react-dropzone-component";

import Nestable from "react-nestable";

import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel
} from "react-accessible-accordion";

// Demo styles, see 'Styles' section below for some notes on use.
import "react-accessible-accordion/dist/fancy-example.css";
import ReactDOM from "react-dom";
import ReactDragListView from "react-drag-listview";

class FinalTour extends Component {
  constructor(props) {
    super(props);

    // For a full list of possible configurations,
    // please consult http://www.dropzonejs.com/#configuration
    this.djsConfig = {
      addRemoveLinks: true,
      acceptedFiles: "image/jpeg,image/png,image/gif"
    };

    this.componentConfig = {
      iconFiletypes: [".jpg", ".png", ".gif"],
      showFiletypeIcon: true,
      postUrl: "/uploadHandler"
    };

    // If you want to attach multiple callbacks, simply
    // create an array filled with all your callbacks.
    this.callbackArray = [() => console.log("Hi!"), () => console.log("Ho!")];

    // Simple callbacks work too, of course
    this.callback = () => console.log("Hello!");

    this.success = file => console.log("uploaded", file);

    this.removedfile = file => console.log("removing...", file);

    this.dropzone = null;

    const faqId = [];
    const itinearyId = [];
    const factId = [];
    console.log(factId);
    // faqId.push({
    //   title: `rows$`
    // });

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
      writing: false,
      itinearyId,
      faqId,
      factId
    };

    // this.fileInput = React.createRef();

    this.onChangeHandler = this.onChangeHandler.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleTextareaChange = this.handleTextareaChange.bind(this);
    this.handleCategories = this.handleCategories.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleAddingAccordion = this.handleAddingAccordion.bind(this);
    this.handleAddingFaq = this.handleAddingFaq.bind(this);
    this.handleAddingFact = this.handleAddingFact.bind(this);

    this.removeItineary = this.removeItineary.bind(this);
    this.removeFaq = this.removeFaq.bind(this);
    this.removeFact = this.removeFact.bind(this);
  }
  handleAddingAccordion() {
    let curr = this.state.itinearyId;
    const uniqueID = Date.now();
    this.setState({ itinearyId: [...curr, uniqueID] });
  }
  handleAddingFaq() {
    let curr = this.state.faqId;
    const uniqueID = Date.now();
    this.setState({ faqId: [...curr, uniqueID] });
  }

  handleAddingFact() {
    let curr = this.state.factId;
    const uniqueID = Date.now();
    this.setState({ factId: [...curr, uniqueID] });
  }

  removeItineary(e) {
    document.getElementById("ai-" + e).remove();
  }

  removeFaq(e) {
    document.getElementById("ai-" + e).remove();
  }
  removeFact(e) {
    document.getElementById("ai-" + e).remove();
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
      .post("http://localhost:8082/api/tours", data, {})
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
        //this.props.history.push("/blog-tours");
      })
      .catch(err => {
        console.log("Error in Createpage!");
      });
  };

  render() {
    const config = this.componentConfig;
    const djsConfig = this.djsConfig;

    // For a list of all possible events (there are many), see README.md!
    const eventHandlers = {
      init: dz => (this.dropzone = dz),
      drop: this.callbackArray,
      addedfile: this.callback,
      success: this.success,
      removedfile: this.removedfile
    };

    const that = this;
    const dragProps = {
      onDragEnd(fromIndex, toIndex) {
        const faqId = that.state.faqId;
        const item = faqId.splice(fromIndex, 1)[0];
        faqId.splice(toIndex, 0, item);
        that.setState({ faqId });
      },
      nodeSelector: "div",
      handleSelector: "a"
    };

    const dragProps1 = {
      onDragEnd(fromIndex, toIndex) {
        const itinearyId = that.state.itinearyId;
        const item = itinearyId.splice(fromIndex, 1)[0];
        itinearyId.splice(toIndex, 0, item);
        that.setState({ itinearyId });
      },
      nodeSelector: "div",
      handleSelector: "a"
    };
    const dragProps2 = {
      onDragEnd(fromIndex, toIndex) {
        const factId = that.state.factId;
        const item = factId.splice(fromIndex, 1)[0];
        factId.splice(toIndex, 0, item);
        that.setState({ factId });
      },
      nodeSelector: "div",
      handleSelector: "a"
    };

    return (
      <Row>
        {/* Editor */}
        <Form id="form1" className="add-new-page" onSubmit={this.handleSubmit}>
          <Col lg="9" md="12">
            <Card small className="mb-3">
              <CardBody>
                <FormInput
                  type="text"
                  placeholder="Title of the Tour"
                  name="title"
                  className="form-control mb-3"
                  value={this.state.title}
                  onChange={this.handleInputChange}
                  size="lg"
                />
                <Tabs>
                  <TabList>
                    <Tab>Description</Tab>
                    <Tab>Itinerary/Direction</Tab>
                    <Tab>Includes/Excludes</Tab>
                    <Tab>Facts</Tab>
                    <Tab>Dates/Prices</Tab>
                    <Tab>Gallery</Tab>
                    <Tab>FAQs</Tab>
                  </TabList>

                  <TabPanel>
                    <h4 className="tab-content-title">Trip Code</h4>
                    <FormInput
                      type="text"
                      placeholder="Trip Code"
                      name="tripCode"
                      className="form-control mb-3"
                      value={this.state.tripCode}
                      onChange={this.handleInputChange}
                      size="lg"
                    />
                    <h4 className="tab-content-title">Description</h4>
                    <CKEditor
                      editor={ClassicEditor}
                      data=""
                      placeholder="Description"
                      onChange={this.handleTextareaChange}
                      config={{
                        ckfinder: {
                          uploadUrl: "http://localhost/8082/backend/public"
                        }
                      }}
                    />
                    <h4 className="tab-content-title mt-4">
                      Short Description
                    </h4>
                    <FormTextarea
                      className="mt-1"
                      placeholder="Short Description"
                      col="5"
                      row="5"
                    ></FormTextarea>
                  </TabPanel>
                  <TabPanel>
                    <h4 className="tab-content-title">Direction</h4>
                    <FormInput
                      type="text"
                      placeholder="Add Iframe link form goole map"
                      name="trip map"
                      className="form-control mb-3"
                      value={this.state.tripMap}
                      onChange={this.handleInputChange}
                      size="lg"
                    />

                    <h4 className="tab-content-title">Itineary</h4>

                    <Accordion
                      allowMultipleExpanded={true}
                      allowZeroExpanded={true}
                      className="itineary-accordion accordion"
                    >
                      <ReactDragListView {...dragProps1}>
                        {this.state.itinearyId.map((itineary, idx) => (
                          <AccordionItem key={idx} id={"ai-" + itineary}>
                            <AccordionItemHeading>
                              <AccordionItemButton>
                                Itineary Day
                              </AccordionItemButton>
                            </AccordionItemHeading>
                            <a href="#" className="sort-drag">
                              <i className="material-icons">reorder</i>
                            </a>
                            <Button
                              type="button"
                              className="btn btn-danger btn-sm"
                              onClick={() => this.removeItineary(itineary)}
                            >
                              <i className="material-icons">close</i>
                            </Button>
                            <AccordionItemPanel>
                              <h6>Itineary Title</h6>
                              <FormInput
                                type="text"
                                placeholder="itineary title"
                                name="tripCode"
                                className="form-control mb-3"
                                value={this.state.itineary}
                                onChange={this.handleInputChange}
                                size="lg"
                              />

                              <FormInput
                                type="text"
                                placeholder="itineary date"
                                name="tripitineary date"
                                className="form-control mb-3"
                                value={this.state.itineary}
                                onChange={this.handleInputChange}
                                size="lg"
                              />

                              <FormInput
                                type="text"
                                placeholder="itineary time"
                                name="trip itineary time"
                                className="form-control mb-3"
                                value={this.state.itineary}
                                onChange={this.handleInputChange}
                                size="lg"
                              />

                              <CKEditor
                                editor={ClassicEditor}
                                data=""
                                placeholder="Itineray Description"
                                onChange={this.handleTextareaChange}
                                config={{
                                  ckfinder: {
                                    uploadUrl:
                                      "http://localhost/8082/backend/public"
                                  }
                                }}
                              />
                            </AccordionItemPanel>
                          </AccordionItem>
                        ))}
                      </ReactDragListView>
                    </Accordion>

                    <Button
                      theme="accent"
                      size="sm"
                      className="ml-auto float-right mt-3"
                      type="button"
                      onClick={this.handleAddingAccordion}
                    >
                      <i className="material-icons">file_copy</i>{" "}
                      {"Add Itineary"}
                    </Button>
                  </TabPanel>
                  <TabPanel>
                    <h4 className="tab-content-title">Includes</h4>
                    <CKEditor
                      editor={ClassicEditor}
                      data=""
                      placeholder="Description"
                      onChange={this.handleTextareaChange}
                      config={{
                        ckfinder: {
                          uploadUrl: "http://localhost/8082/backend/public"
                        }
                      }}
                    />

                    <h4 className="tab-content-title mt-3">Excludes</h4>
                    <CKEditor
                      editor={ClassicEditor}
                      data=""
                      placeholder="Description"
                      onChange={this.handleTextareaChange}
                      config={{
                        ckfinder: {
                          uploadUrl: "http://localhost/8082/backend/public"
                        }
                      }}
                    />
                  </TabPanel>
                  <TabPanel>
                    <h4 className="tab-content-title">Facts</h4>

                    <ReactDragListView {...dragProps2}>
                      <div className="sortable container">
                        {this.state.factId.map((fact, idx) => (
                          <div key={idx} className="row" id={"ai-" + fact}>
                            <Col lg="2" md="3" xs="6">
                              <a href="#" className="sort-drag">
                                <i className="material-icons">reorder</i>
                              </a>
                            </Col>

                            <Col lg="4" md="3" xs="6">
                              <FormInput
                                type="text"
                                placeholder="icon code"
                                name="icon code"
                                className="form-control mb-3"
                                value={this.state.faq}
                                onChange={this.handleInputChange}
                                size="lg"
                              />
                            </Col>
                            <Col lg="4" md="3" xs="6">
                              <FormInput
                                type="text"
                                placeholder="Fact info"
                                name="Fact info"
                                className="form-control mb-3"
                                value={this.state.faq}
                                onChange={this.handleInputChange}
                                size="lg"
                              />
                            </Col>
                            <Col lg="2" md="3" xs="6">
                              <Button
                                type="button"
                                className="btn btn-danger btn-sm"
                                onClick={() => this.removeFact(fact)}
                              >
                                <i className="material-icons">close</i>
                              </Button>
                            </Col>
                          </div>
                        ))}
                      </div>
                    </ReactDragListView>
                    <Button
                      theme="accent"
                      size="sm"
                      className="ml-auto float-right mt-3"
                      type="button"
                      onClick={this.handleAddingFact}
                    >
                      <i className="material-icons">file_copy</i> {"Add Facts"}
                    </Button>
                  </TabPanel>
                  <TabPanel>
                    <h4 className="tab-content-title">Dates/Prices</h4>
                  </TabPanel>
                  <TabPanel>
                    <h4 className="tab-content-title">Gallery</h4>
                    <p>
                      <strong>Create a Image Gallery</strong>
                    </p>
                    <DropzoneComponent
                      config={config}
                      eventHandlers={eventHandlers}
                      djsConfig={djsConfig}
                    />
                  </TabPanel>
                  <TabPanel>
                    <h4 className="tab-content-title">FAQs</h4>

                    <Accordion
                      allowMultipleExpanded={true}
                      allowZeroExpanded={true}
                    >
                      <ReactDragListView {...dragProps}>
                        <div className="sortable">
                          {this.state.faqId.map((faq, idx) => (
                            <AccordionItem key={faq} id={"ai-" + faq}>
                              <AccordionItemHeading>
                                <AccordionItemButton>FAQs</AccordionItemButton>
                              </AccordionItemHeading>
                              <a href="#" className="sort-drag">
                                <i className="material-icons">reorder</i>
                              </a>
                              <Button
                                type="button"
                                className="btn btn-danger btn-sm"
                                onClick={() => this.removeFaq(faq)}
                              >
                                <i className="material-icons">close</i>
                              </Button>
                              <AccordionItemPanel>
                                <h6>FAQs Question</h6>
                                <FormInput
                                  type="text"
                                  placeholder="faq question"
                                  name="tripCode"
                                  className="form-control mb-3"
                                  value={this.state.faq}
                                  onChange={this.handleInputChange}
                                  size="lg"
                                />

                                <CKEditor
                                  editor={ClassicEditor}
                                  data=""
                                  placeholder="faq Description"
                                  onChange={this.handleTextareaChange}
                                  config={{
                                    ckfinder: {
                                      uploadUrl:
                                        "http://localhost/8082/backend/public"
                                    }
                                  }}
                                />
                              </AccordionItemPanel>
                            </AccordionItem>
                          ))}
                        </div>
                      </ReactDragListView>
                    </Accordion>

                    <Button
                      theme="accent"
                      size="sm"
                      className="ml-auto float-right mt-3"
                      type="button"
                      onClick={this.handleAddingFaq}
                    >
                      <i className="material-icons">file_copy</i> {"Add FAQs"}
                    </Button>
                  </TabPanel>
                </Tabs>

                <br />
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

            <Card small className="mb-3">
              <CardHeader className="border-bottom">
                <h6 className="m-0">Feature Image</h6>
              </CardHeader>
              <CardBody className="p-0">
                <ListGroup flush>
                  <ListGroupItem className="d-flex px-3">
                    <DropzoneComponent
                      config={config}
                      eventHandlers={eventHandlers}
                      djsConfig={djsConfig}
                      multiple="false"
                    />
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

export default FinalTour;
