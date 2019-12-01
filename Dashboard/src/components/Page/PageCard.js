import React from "react";
import { Link } from "react-router-dom";
import "../../App.css";
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  CardFooter,
  Badge,
  Button
} from "shards-react";
import axios from "axios";

//import bannerOneImage from "../../assets/img/beach1.jpg";
import authorAvatar from "../../images/avatars/1.jpg";

// onDeleteClick(id) {
//   axios
//     .delete("http://localhost:8082/api/pages/" + this.props.match.params.id)
//     .then(res => {
//       //this.props.history.push("/blog-pages");
//       console.log(this.state);
//     })
//     .catch(err => {
//       console.log("Error form ShowpageDetails_deleteClick");
//     });
// };

const PageCard = props => {
  const page = props.page;
  const backgroundImage = {
    backgroundImage: "url(" + page.profileImg + ")"
  };
  // const backgroundImageDefault = {
  //   backgroundImage: "url(" + bannerOneImage + ")"
  // };
  const avatar = {
    backgroundImage: "url(" + authorAvatar + ")"
  };

  const values = [];

  if (props.page.uncategorized) {
    values.push("Uncategorized");
  }
  if (props.page.design) {
    values.push("Design");
  }
  if (props.page.development) {
    values.push("Development");
  }
  if (props.page.writing) {
    values.push("Writing");
  }

  console.log(values);

  var finalPageImage = backgroundImage;

  return (
    // <Col lg="3" md="6" sm="12" className="mb-4">
    //   <Card small className="card-page card-page--1">
    //     <div className="card-page__image" style={finalpageImage}>
    //       <Badge
    //         pill
    //         className={`card-page__category bg-${page.categoryTheme}`}
    //       >
    //         {page.category}
    //       </Badge>
    //       <div className="card-page__author d-flex">
    //         <a
    //           href={`/edit-page/${page._id}`}
    //           style={avatar}
    //           className="card-page__author-avatar card-page__author-avatar--small"
    //         >
    //           Written by {page.author}
    //         </a>
    //       </div>
    //     </div>
    //     <CardBody>
    //       <h5 className="card-title">
    //         <Link className="text-fiord-blue" to={`/edit-page/${page._id}`}>
    //           {page.title}
    //         </Link>
    //       </h5>
    //       <div className="card-text d-inline-block mb-3">
    //         {page.description}
    //       </div>
    //       <span className="text-muted">{page.published_date}</span>
    //     </CardBody>
    //   </Card>
    // </Col>
    <tr role="row" className="odd">
      <td className="file-manager__item-icon" tabIndex="0">
        <div>
          <img src={page.profileImg} className="img-responsive" />
        </div>
      </td>
      <td className="text-left">
        <h5 className="file-manager__item-title">
          <Link className="text-fiord-blue" to={`/edit-page/${page._id}`}>
            {page.title}
          </Link>
        </h5>
        <span className="file-manager__item-meta">
          Last opened 3 months ago.
        </span>
      </td>
      <td className="sorting_1">{values.join(", ")}</td>
      <td>{page.status}</td>
      <td className="date column-date" data-colname="Date">
        Published
        <br />
        <abbr title={page.date}>{page.date}</abbr>
      </td>
      <td className="file-manager__item-actions">
        <div
          className="btn-group btn-group-sm d-flex justify-content-end"
          role="group"
          aria-label="Table row actions"
        >
          <Link className="text-fiord-blue" to={`/edit-page/${page._id}`}>
            <button type="button" className="btn btn-white active-light">
              <i className="material-icons"></i>
            </button>
          </Link>

          <Button type="button" size="sm" theme="danger">
            <i className="material-icons"></i>
          </Button>
        </div>
      </td>
    </tr>
  );
};

export default PageCard;
