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

//import bannerOneImage from "../../assets/img/beach1.jpg";
import authorAvatar from "../../images/avatars/1.jpg";

const PostCard = props => {
  const post = props.post;
  const backgroundImage = {
    backgroundImage: "url(" + post.profileImg + ")"
  };
  // const backgroundImageDefault = {
  //   backgroundImage: "url(" + bannerOneImage + ")"
  // };
  const avatar = {
    backgroundImage: "url(" + authorAvatar + ")"
  };

  var finalPostImage = backgroundImage;

  return (
    // <Col lg="3" md="6" sm="12" className="mb-4">
    //   <Card small className="card-post card-post--1">
    //     <div className="card-post__image" style={finalPostImage}>
    //       <Badge
    //         pill
    //         className={`card-post__category bg-${post.categoryTheme}`}
    //       >
    //         {post.category}
    //       </Badge>
    //       <div className="card-post__author d-flex">
    //         <a
    //           href={`/edit-post/${post._id}`}
    //           style={avatar}
    //           className="card-post__author-avatar card-post__author-avatar--small"
    //         >
    //           Written by {post.author}
    //         </a>
    //       </div>
    //     </div>
    //     <CardBody>
    //       <h5 className="card-title">
    //         <Link className="text-fiord-blue" to={`/edit-post/${post._id}`}>
    //           {post.title}
    //         </Link>
    //       </h5>
    //       <div className="card-text d-inline-block mb-3">
    //         {post.description}
    //       </div>
    //       <span className="text-muted">{post.published_date}</span>
    //     </CardBody>
    //   </Card>
    // </Col>
    <tr role="row" className="odd">
      <td className="file-manager__item-icon" tabIndex="0">
        <div>
          <img src={post.profileImg} className="img-responsive" />
        </div>
      </td>
      <td className="text-left">
        <h5 className="file-manager__item-title">
          <Link className="text-fiord-blue" to={`/edit-post/${post._id}`}>
            {post.title}
          </Link>
        </h5>
        <span className="file-manager__item-meta">
          Last opened 3 months ago.
        </span>
      </td>
      <td className="sorting_1">Development</td>
      <td>{post.status}</td>
      <td className="date column-date" data-colname="Date">
        Published
        <br />
        <abbr title={post.date}>{post.date}</abbr>
      </td>
      <td className="file-manager__item-actions">
        <div
          className="btn-group btn-group-sm d-flex justify-content-end"
          role="group"
          aria-label="Table row actions"
        >
          <button type="button" className="btn btn-white active-light">
            <i className="material-icons"></i>
          </button>
          <button type="button" className="btn btn-danger">
            <i className="material-icons"></i>
          </button>
        </div>
      </td>
    </tr>
  );
};

export default PostCard;
