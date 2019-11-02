import React from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { Redirect } from "react-router-dom";
import moment from "moment";
import YouTube from "react-youtube-embed";
import getYouTubeID from "get-youtube-id";

const SongReviewDetails = props => {
  const { review, auth } = props;
  const videoForReview = getYouTubeID(review.youtubeLinkToSong);

  if (!auth.uid) return <Redirect to="/sign-in" />;

  let deTranslation, esTranslation, frTranslation; // translations using Google Translate Firebase extension
  if (review.translated) {
    deTranslation = review.translated.de ? (
      <>
        <h3>Danish</h3>
        <p>{review.translated.de}</p>
      </>
    ) : null;
    esTranslation = review.translated.es ? (
      <>
        <h3>Spanish</h3>
        <p>{review.translated.es}</p>
      </>
    ) : null;
    frTranslation = review.translated.fr ? (
      <>
        <h3>French</h3>
        <p>{review.translated.fr}</p>
      </>
    ) : null;
  }

  if (review) {
    return (
      <div className="container section song-review-details">
        <div className="card z-depth-0">
          <div className="card-content">
            <span className="card-title">{review.songName}</span>
            <YouTube id={videoForReview} />
            <h3>English</h3>
            <p>{review.reviewContent}</p>
            {deTranslation}
            {esTranslation}
            {frTranslation}
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
