import React from "react";

const SongReviewExcerpt = ({ review }) => {
  return (
    <div className="card z-depth-0 song-review-summary">
      <div className="card-content grey-text text-darken-3">
        <span className="card-title">{review.songName}</span>
        <p>Reviewed by Dillon Coffman</p>
        <p className="grey-text">Nov. 1st, 2019</p>
      </div>
    </div>
  );
};

export default SongReviewExcerpt;
