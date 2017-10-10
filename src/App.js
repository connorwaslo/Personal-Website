import React, { Component } from 'react';
import { SkillsScreen } from "./components/SkillsScreen"
import './App.css';
import {AboutScreen} from "./components/AboutScreen";

class App extends Component {
  render() {
    return (
      <div className="App">
          <div id="page-one">
              <AboutScreen/>
          </div>
          <div id="page-two">
              <SkillsScreen/>
          </div>
          <div id="page-three">
              <h2>Page Three</h2>
          </div>
          <div id="page-four">
              <h2>Page Four</h2>
          </div>
      </div>
    );
  }
}

export default App;
