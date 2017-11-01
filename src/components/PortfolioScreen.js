import React from 'react';
import '../styles/PortfolioScreen.css';
import YouTube from 'react-youtube';

// TODO: Make a nice classy theater mode background to either side of the videos

export class PortfolioScreen extends React.Component {

    render() {
        return (
            <div id="portfolioContainer">
                <h1>Portfolio</h1>
                <div id="mandarinContainer">
                    <h2>Confucius Institute Southwest Regional Speech Competition</h2>
                    <div className="theaterMode">
                        <YouTube
                            id="mandarinVideo"
                            videoId="7tmq_AghVvw"
                            />
                    </div>
                </div>
                <div id="nhdContainer">
                    <h2>National History Day Senior Group Documentary</h2>
                    <div className="theaterMode">
                        <YouTube
                            id="nhdVideo"
                            videoId="50xn6eDD-5Y"
                            />
                    </div>
                </div>
            </div>
        )
    }
}