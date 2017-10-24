import React, { Component } from 'react';
import { SkillsScreen } from "./components/SkillsScreen"
import {TitleScreen} from "./components/TitleScreen";
import {AboutScreen} from "./components/AboutScreen";
import {PortfolioScreen} from "./components/PortfolioScreen";
import './App.css';

class App extends Component {
  render() {
      return (
          <div className="App">
              <div id="page-one">
                  <TitleScreen/>
              </div>
              <div id="blueBackgroundGradient">
                  <div id="page-two">
                      <AboutScreen/>
                  </div>
                  <div id="page-three">
                      <SkillsScreen/>
                  </div>
                  {/*<div id="page-four">
                      <PortfolioScreen/>
                  </div>*/}
              </div>
          </div>
      );
  }
}

export default App;
