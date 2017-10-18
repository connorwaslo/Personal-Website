import React from 'react';
import '../styles/PortfolioScreen.css';

export class PortfolioScreen extends React.Component {

    render() {
        return (
            <div id="portfolioContainer">
                <h1>Portfolio</h1>
                <div id="nhdContainer">
                    <h2>National History Day Documentary</h2>
                    <iframe width="800" height="600"
                            src="http://www.youtube.com/watch?v=50xn6eDD-5Y"
                            title="NHD" frameBorder={0}/>
                </div>
            </div>
        )
    }
}