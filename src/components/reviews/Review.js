import React from "react";
import { Link } from "react-router-dom";

function Review(props) {
  return (
    <div className="review">
      <Link to={`/reviews/${props.review.id}`}>
        <h3>{props.review.title}</h3>
      </Link>
    </div>
  );
}

export default Review;