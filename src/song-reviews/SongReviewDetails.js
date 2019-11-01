import React from "react";

const SongReviewDetails = props => {
  const id = props.match.params.id;
  return (
    <div className="container section song-review-details">
      <div className="card z-depth-0">
        <div className="card-contet">
          <span className="card-title">Song Review - {id}</span>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam
            quasi et voluptatibus, ut rem quam autem expedita officiis fuga qui
            eos voluptates labore soluta voluptatum iure culpa, commodi
            recusandae laborum.
          </p>
          <div className="card-action grey lighten-4 grey-text">
            <div>Reviewed by Dillon Coffman</div>
            <div>Nov. 1st, 2019</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SongReviewDetails;
