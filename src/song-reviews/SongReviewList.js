import React from "react";
import SongReviewExcerpt from "./SongReviewExcerpt";
import { Link } from "react-router-dom";

const SongReviewList = ({ reviews }) => {
  return (
    <div className="song-review-list section">
      {reviews &&
        reviews.map(review => {
          return (
            <Link key={review.id} to={"/song-review/" + review.id}>
              <SongReviewExcerpt review={review} key={review.id} />;
            </Link>
          );
        })}
    </div>
  );
};

export default SongReviewList;
