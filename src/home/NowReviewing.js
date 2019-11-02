import React from "react";
import moment from "moment";

const NowReviewing = props => {
  const { notifs } = props;
  return (
    <div className="section">
      <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-title">Now Reviewing</span>
          <ul className="now-reviewing">
            {notifs &&
              notifs.map(notif => (
                <li key={notif.id}>
                  <span className="light-blue lighten-4">{notif.user} </span>
                  <span>{notif.content}</span>
                  <div className="grey-text note-date">
                    {moment(notif.time.toDate()).fromNow()}
                  </div>
                </li>
              ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NowReviewing;
