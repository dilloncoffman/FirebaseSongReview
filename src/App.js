import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "./layout/Navbar";
import Home from "./home/Home";
import SongReviewDetails from "./song-reviews/SongReviewDetails";
import SignIn from "./auth/SignIn";
import SignUp from "./auth/SignUp";
import CreateSongReview from "./song-reviews/CreateSongReview";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/song-review/:id" component={SongReviewDetails} />
          <Route path="/sign-in" component={SignIn} />
          <Route path="/sign-up" component={SignUp} />
          <Route path="/create-song-review" component={CreateSongReview} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
