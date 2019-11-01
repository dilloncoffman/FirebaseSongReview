import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "./layout/Navbar";
import Home from "./home/Home";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/" component={Home} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
