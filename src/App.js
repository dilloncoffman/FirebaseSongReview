import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "./layout/Navbar";
import Home from "./home/Home";
import SongReviewDetails from "./song-reviews/SongReviewDetails";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/song-review/:id" component={SongReviewDetails} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
