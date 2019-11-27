/* eslint jsx-a11y/anchor-is-valid: 0 */

import React, { Component } from "react";

import axios from "axios";

import PropTypes from "prop-types";
import {
  Card,
  CardHeader,
  CardBody,
  ListGroup,
  ListGroupItem,
  Button,
  Form,
  FormInput,
  FormSelect
} from "shards-react";

export default class SidebarActions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: "",
      visibility: "",
      schedule: "",
      readability: "ok"
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = e => {
    const target = e.target;
    const name = target.name;
    const value = target.value;
    this.setState({
      [name]: value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    //console.log(this.fileInput.current.files[0].name);

    // const data = {
    //   title: this.state.title,
    //   description: this.state.description,
    //   profileImg: (this.state.profileImg, this.state.profileImg.name)
    // };

    document.getElementById("form1").submit();
    const data = new FormData();
    data.append("status", this.state.status);
    data.append("visibility", this.state.visibility);
    data.append("schedule", this.state.schedule);
    data.append("readability", this.state.readability);
    //data.append("image", this.state.profileImg, this.state.profileImg.name);
    console.log(this.state);
    // axios
    //   .post("http://localhost:8082/api/posts", data, {})
    //   .then(res => {
    //     this.setState({
    //       title: "",
    //       description: "",
    //       profileImg: ""
    //     });
    //     //this.props.history.push("/blog-posts");
    //   })
    //   .catch(err => {
    //     console.log("Error in CreatePost!");
    //   });
  };
  render() {
    return (
      <Card small className="mb-3">
        <CardHeader className="border-bottom">
          <h6 className="m-0">Actions</h6>
        </CardHeader>
        <CardBody className="p-0">
          <Form className="action" onSubmit={this.handleSubmit}>
            <ListGroup flush>
              <ListGroupItem className="p-3">
                <span className="d-flex mb-2">
                  <i className="material-icons mr-1">flag</i>
                  <strong className="mr-1">Status:</strong>
                  <select
                    name="Status"
                    value={this.state.status}
                    onChange={this.handleChange}
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
                    name="Visibility"
                    value={this.state.visibility}
                    onChange={this.handleChange}
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
                    name="Schedule"
                    value={this.state.schedule}
                    onChange={this.handleChange}
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
          </Form>
        </CardBody>
      </Card>
    );
  }
}

// const SidebarActions = ({ title }) => (
// <Card small className="mb-3">
//   <CardHeader className="border-bottom">
//     <h6 className="m-0">{title}</h6>
//   </CardHeader>

//   <CardBody className="p-0">

//   </CardBody>
// </Card>
// );

// SidebarActions.propTypes = {
//   /**
//    * The component's title.
//    */
//   title: PropTypes.string
// };

// SidebarActions.defaultProps = {
//   title: "Actions"
// };

// export default SidebarActions;
