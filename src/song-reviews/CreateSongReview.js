import React, { Component } from "react";
import { connect } from "react-redux";
import { createSongReview } from "../store/actions/reviewActions";

class CreateSongReview extends Component {
  state = {
    songName: "",
    artistName: "",
    youtubeLinkToSong: "",
    reviewContent: ""
  };

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.createSongReview(this.state);
  };

  render() {
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit} className="white">
          <h5 className="grey-text text-darken-3">Review Song</h5>
          <div className="input-field">
            <label htmlFor="songName">Song Name</label>
            <input type="text" id="songName" onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="artistName">Artist</label>
            <input type="text" id="artistName" onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="youtubeLinkToSong">YouTube Link</label>
            <input
              type="text"
              id="youtubeLinkToSong"
              onChange={this.handleChange}
            />
          </div>
          <div className="input-field">
            <label htmlFor="reviewContent">Review Content</label>
            <textarea
              id="reviewContent"
              className="materialize-textarea"
              onChange={this.handleChange}
            ></textarea>
          </div>
          <div className="input-field">
            <button className="btn light-blue lighten-4 z-depth-0">
              Review
            </button>
          </div>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    createSongReview: review => dispatch(createSongReview(review))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(CreateSongReview);
