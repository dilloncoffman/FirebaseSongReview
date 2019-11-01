import React from "react";
import SongReviewExcerpt from "./SongReviewExcerpt";

const SongReviewList = ({ reviews }) => {
  return (
    <div className="song-review-list section">
      {reviews &&
        reviews.map(review => {
          return <SongReviewExcerpt review={review} key={review.id} />;
        })}
    </div>
  );
};

export default SongReviewList;
