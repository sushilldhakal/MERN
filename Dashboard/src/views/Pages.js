/* eslint jsx-a11y/anchor-is-valid: 0 */
import React, { Component } from "react";
import { Container, Row } from "shards-react";

import axios from "axios";
import PageCard from "../components/Page/PageCard";

import PageTitle from "../components/common/PageTitle";

import "../App.css";

class Pages extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pages: []
    };
  }
  componentDidMount() {
    axios
      .get("http://localhost:8082/api/pages")
      .then(res => {
        this.setState({
          pages: res.data
        });
      })
      .catch(err => {
        console.log("Error from pageList");
      });
  }

  render() {
    const pages = this.state.pages;
    let pageList;

    if (!pages) {
      pageList = "there is no page recored!";
    } else {
      pageList = pages.map((page, k) => <PageCard page={page} key={k} />);
    }
    return (
      <Container fluid className="main-content-container px-4 pb-4">
        {/* Page Header */}
        <Row noGutters className="page-header py-4">
          <PageTitle
            sm="4"
            title="Pages"
            subtitle="Components"
            className="text-sm-left"
          />
          <div className="col d-flex">
            <div
              className="btn-group btn-group-sm d-inline-flex ml-auto my-auto"
              role="group"
              aria-label="Table row actions"
            >
              <a href="/blog-posts" className="btn btn-white active">
                <i className="material-icons"></i>
              </a>
              <a href="/blog-posts" className="btn btn-white">
                <i className="material-icons"></i>
              </a>
            </div>
          </div>
        </Row>
        <div className="dataTables_wrapper no-footer">
          <div className="dataTables_length" id="DataTables_Table_0_length">
            <label>
              Show
              <select
                name="DataTables_Table_0_length"
                aria-controls="DataTables_Table_0"
                className=""
              >
                <option value="10">10</option>
                <option value="25">25</option>
                <option value="50">50</option>
                <option value="100">100</option>
              </select>{" "}
              entries
            </label>
          </div>
          <div id="DataTables_Table_0_filter" className="dataTables_filter">
            <label>
              Search:
              <input
                type="search"
                className=""
                placeholder=""
                aria-controls="DataTables_Table_0"
              />
            </label>
          </div>

          <table
            className="file-manager file-manager-list d-none table-responsive dataTable no-footer dtr-inline"
            id="DataTables_Table_0"
            role="grid"
            aria-describedby="DataTables_Table_0_info"
          >
            <thead>
              <tr role="row">
                <th
                  className="hide-sort-icons sorting"
                  tabIndex="0"
                  aria-controls="DataTables_Table_0"
                  rowSpan="1"
                  colSpan="1"
                  aria-label=": activate to sort column ascending"
                ></th>
                <th
                  className="text-left sorting"
                  tabIndex="0"
                  aria-controls="DataTables_Table_0"
                  rowSpan="1"
                  colSpan="1"
                  aria-label="Name: activate to sort column ascending"
                >
                  Name
                </th>
                <th
                  className="sorting_desc"
                  tabIndex="0"
                  aria-controls="DataTables_Table_0"
                  rowSpan="1"
                  colSpan="1"
                  aria-label="Categories: activate to sort column ascending"
                  aria-sort="descending"
                >
                  Categories
                </th>
                <th
                  className="sorting"
                  tabIndex="0"
                  aria-controls="DataTables_Table_0"
                  rowSpan="1"
                  colSpan="1"
                  aria-label="Status: activate to sort column ascending"
                >
                  Status
                </th>
                <th
                  className="sorting"
                  tabIndex="0"
                  aria-controls="DataTables_Table_0"
                  rowSpan="1"
                  colSpan="1"
                  aria-label="Date: activate to sort column ascending"
                >
                  Date
                </th>
                <th
                  className="text-right sorting"
                  tabIndex="0"
                  aria-controls="DataTables_Table_0"
                  rowSpan="1"
                  colSpan="1"
                  aria-label="Actions: activate to sort column ascending"
                >
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>{pageList}</tbody>
          </table>

          <div
            className="dataTables_info"
            id="DataTables_Table_0_info"
            role="status"
            aria-live="polite"
          >
            Showing 1 to 9 of 9 entries
          </div>
          <div
            className="dataTables_paginate paging_simple_numbers"
            id="DataTables_Table_0_paginate"
          >
            <a
              className="paginate_button previous disabled"
              aria-controls="DataTables_Table_0"
              data-dt-idx="0"
              tabIndex="0"
              id="DataTables_Table_0_previous"
            >
              Previous
            </a>
            <span>
              <a
                className="paginate_button current"
                aria-controls="DataTables_Table_0"
                data-dt-idx="1"
                tabIndex="0"
              >
                1
              </a>
            </span>
            <a
              className="paginate_button next disabled"
              aria-controls="DataTables_Table_0"
              data-dt-idx="2"
              tabIndex="0"
              id="DataTables_Table_0_next"
            >
              Next
            </a>
          </div>
        </div>
      </Container>
    );
  }
}

export default Pages;
