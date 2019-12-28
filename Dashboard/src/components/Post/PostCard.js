import React from "react";
import { Link } from "react-router-dom";
import "../../App.css";
import { Button } from "shards-react";

const PostCard = props => {
  const post = props.post;

  const values = [];

  if (props.post.uncategorized) {
    values.push("Uncategorized");
  }
  if (props.post.design) {
    values.push("Design");
  }
  if (props.post.development) {
    values.push("Development");
  }
  if (props.post.writing) {
    values.push("Writing");
  }

  return (
    <tr role="row" className="odd">
      <td className="file-manager__item-icon" tabIndex="0">
        <div>
          <img
            src={post.profileImg}
            className="img-responsive"
            alt={post.profileImg.title}
          />
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
      <td className="sorting_1">{values.join(", ")}</td>
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
          <Link className="text-fiord-blue" to={`/edit-post/${post._id}`}>
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

export default PostCard;
