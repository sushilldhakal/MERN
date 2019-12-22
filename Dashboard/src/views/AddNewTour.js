import React from "react";
import { Container, Row } from "shards-react";

import PageTitle from "../components/common/PageTitle";

import FinalTour from "../components/Tour/FinalTour";

const AddNewTour = () => (
  <Container fluid className="main-content-container px-4 pb-4">
    {/* Page Header */}
    <Row noGutters className="page-header py-4">
      <PageTitle
        sm="4"
        title="Add New Tour"
        subtitle="Tours"
        className="text-sm-left"
      />
    </Row>
    <FinalTour />
  </Container>
);

export default AddNewTour;
