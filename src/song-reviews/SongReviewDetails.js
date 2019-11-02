import React from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { Redirect } from "react-router-dom";
import moment from "moment";

const SongReviewDetails = props => {
  const { review, auth } = props;

  if (!auth.uid) return <Redirect to="/sign-in" />;

  if (review) {
    return (
      <div className="container section song-review-details">
        <div className="card z-depth-0">
          <div className="card-contet">
            <span className="card-title">{review.songName}</span>
            <p>{review.reviewContent}</p>
            <div className="card-action grey lighten-4 grey-text">
              <div>Reviewed by {review.authorUser}</div>
              <div>{moment(review.createdAt.toDate()).calendar()}</div>
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
    review: review,
    auth: state.firebase.auth
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: "reviews" }])
)(SongReviewDetails);
