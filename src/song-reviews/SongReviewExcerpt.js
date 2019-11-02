import React from "react";
import moment from "moment";

const SongReviewExcerpt = ({ review }) => {
  return (
    <div className="card z-depth-0 song-review-summary">
      <div className="card-content grey-text text-darken-3">
        <span className="card-title">{review.songName}</span>
        <p>Reviewed by {review.authorUser}</p>
        <p className="grey-text">
          {moment(review.createdAt.toDate()).calendar()}
        </p>
      </div>
    </div>
  );
};

export default SongReviewExcerpt;
