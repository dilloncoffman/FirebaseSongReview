import React from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";

const SongReviewDetails = props => {
  const { review } = props;
  if (review) {
    return (
      <div className="container section song-review-details">
        <div className="card z-depth-0">
          <div className="card-contet">
            <span className="card-title">{review.songName}</span>
            <p>{review.reviewContent}</p>
            <div className="card-action grey lighten-4 grey-text">
              <div>Reviewed by {review.authorUser}</div>
              <div>Nov. 1st, 2019</div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="container center">
        <h3 className="white-text">Loading review...</h3>
      </div>
    );
  }
};

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id;
  const reviews = state.firestore.data.reviews;
  const review = reviews ? reviews[id] : null;
  return {
    review: review
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: "reviews" }])
)(SongReviewDetails);
