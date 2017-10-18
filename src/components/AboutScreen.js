import React from 'react';
import '../styles/AboutScreen.css';

export class AboutScreen extends React.Component {
    render() {
        return (
            <div id="aboutContainer">
                <ul id="aboutButtons">
                    <li id="basisSenior"><a href="http://www.basised.com/phoenix/">
                        <h2>BASIS Phoenix Senior</h2>
                        <img id="basisLogo" src={require('../res/logos/basisphx.png')} alt="basis phx"/>
                    </a></li>
                    <li id="gocodeFounder"><a href="http://gocode.courses">
                        <h2>GoCode Founder</h2>
                        <img id="basisLogo" src={require('../res/logos/gocode.png')} alt="basis phx"/>
                    </a></li>
                    <li id="tgfBoard"><a href="http://thegeniusfactory.org">
                        <h2>The Genius Factory</h2>
                        <img id="basisLogo" src={require('../res/logos/tgf.png')} alt="basis phx"/>
                    </a></li>
                </ul>
            </div>
        );
    }
}