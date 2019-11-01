import React, { Component } from "react";
import NowReviewing from "./NowReviewing";
import SongReviewList from "../song-reviews/SongReviewList";
import { connect } from "react-redux";

class Home extends Component {
  render() {
    const { reviews } = this.props;
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
    reviews: state.review.reviews
  };
};

export default connect(mapStateToProps)(Home);
