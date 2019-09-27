import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import './App.css'

import CreateHouse from './components/CreateHouse';
import HomePage from './components/HomePage';
import HouseDetails from './components/HouseDetails';
import Houses from './components/Houses';

class App extends Component {

  render() {

    return (
      <div className="container">
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/houses" component={Houses} />
            <Route exact path="/:houseId" component={HouseDetails} />
            <Route exact path="/create" component={CreateHouse} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}
export default App;
