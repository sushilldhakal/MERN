import React from "react";
import { Container, Row, Col } from "shards-react";

import PageTitle from "../components/common/PageTitle";

import FinalPage from "../components/Page/FinalPage";

const AddNewPage = () => (
  <Container fluid className="main-content-container px-4 pb-4">
    {/* Page Header */}
    <Row noGutters className="page-header py-4">
      <PageTitle
        sm="4"
        title="Add New Post"
        subtitle="Blog Posts"
        className="text-sm-left"
      />
    </Row>
    <FinalPage />
    <Row>
      {/* Editor */}
      {/* <Col lg="9" md="12">
        <Editor />
      </Col> */}
      {/* Sidebar Widgets */}
      {/* <Col lg="3" md="12">
        <SidebarActions />
        <SidebarCategories />
      </Col> */}
    </Row>
  </Container>
);

export default AddNewPage;
