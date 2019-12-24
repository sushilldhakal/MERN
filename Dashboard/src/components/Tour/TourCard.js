import React from "react";
import { Link } from "react-router-dom";
import "../../App.css";
import { Button } from "shards-react";
import axios from "axios";

//import bannerOneImage from "../../assets/img/beach1.jpg";

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

const TourCard = props => {
  const tour = props.tour;

  const values = [];

  if (props.tour.uncategorized) {
    values.push("Uncategorized");
  }
  if (props.tour.design) {
    values.push("Design");
  }
  if (props.tour.development) {
    values.push("Development");
  }
  if (props.tour.writing) {
    values.push("Writing");
  }

  return (
    <tr role="row" className="odd">
      <td className="file-manager__item-icon" tabIndex="0">
        <div>
          <img
            src={tour.profileImg}
            className="img-responsive"
            alt={tour.profileImg.title}
          />
        </div>
      </td>
      <td className="text-left">
        <h5 className="file-manager__item-title">
          <Link className="text-fiord-blue" to={`/edit-tour/${tour._id}`}>
            {tour.title}
          </Link>
        </h5>
        <span className="file-manager__item-meta">
          Last opened 3 months ago.
        </span>
      </td>
      <td className="sorting_1">{values.join(", ")}</td>
      <td>{tour.status}</td>
      <td className="date column-date" data-colname="Date">
        Published
        <br />
        <abbr title={tour.date}>{tour.date}</abbr>
      </td>
      <td className="file-manager__item-actions">
        <div
          className="btn-group btn-group-sm d-flex justify-content-end"
          role="group"
          aria-label="Table row actions"
        >
          <Link className="text-fiord-blue" to={`/edit-tour/${tour._id}`}>
            <button type="button" className="btn btn-white active-light">
              <i className="material-icons"></i>
            </button>
          </Link>

          <Button type="button" size="sm" theme="danger">
            <i className="material-icons">delete</i>
          </Button>
        </div>
      </td>
    </tr>
  );
};

export default TourCard;
