import React, { Component } from "react";
import NowReviewing from "./NowReviewing";
import SongReviewList from "../song-reviews/SongReviewList";
import { compose } from "redux";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { Redirect } from "react-router-dom";

class Home extends Component {
  render() {
    const { reviews, auth } = this.props;

    if (!auth.uid) return <Redirect to="/sign-in" />;

    return (
      <div className="dashboard container">
        <div className="row">
          <div className="col s12 m6">
            <SongReviewList reviews={reviews} />
          </div>
          <div className="col s12 m5 offset-m1">
            <NowReviewing />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    reviews: state.firestore.ordered.reviews,
    auth: state.firebase.auth
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: "reviews" }]) // listen to reviews collection
)(Home);
