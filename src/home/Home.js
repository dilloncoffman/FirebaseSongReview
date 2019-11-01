import React, { Component } from "react";
import NowReviewing from "./NowReviewing";
import SongReviewList from "../song-reviews/SongReviewList";

class Home extends Component {
  render() {
    return (
      <div className="dashboard container">
        <div className="row">
          <div className="col s12 m6">
            <SongReviewList />
          </div>
          <div className="col s12 m5 offset-m1">
            <NowReviewing />
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
