import React, { Component } from "react";

import {Router, Route, browserHistory, Redirect} from "react-router";

import Home from './Components/Home'
import ViewCase from './Components/ViewCase';
import NewFIR from './Components/NewFIR';
import TrackCase from './Components/TrackCase.js'
import CaseStatusUpdate from './Components/CaseStatusUpdate.js'

import "./App.css";

class App extends Component {

  render() {
      return (
        <Router history={browserHistory}>   
            <Redirect from="/" to="/home" />
            <Route> 
              <Route path = "viewcase" component = {ViewCase}/>
              <Route path = "newfir" component = {NewFIR}/>
              <Route path = "home" component = {Home}></Route>
              <Route path = "trackcase" component = {TrackCase}></Route> 
              <Route path = "casestatusupdate/:caseId" component = {CaseStatusUpdate}></Route>  
               
            </Route>                 
        </Router>
    );
  }
}
export default App;
