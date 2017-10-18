import React from 'react';
import '../styles/SkillsScreen.css';

/*
    TODO: On mobile make grid 3x2
 */

export class SkillsScreen extends React.Component {
    render() {
        return (
            <div id="skillsContainer">
                <h1>Skills</h1>

                <ul className="skills">
                    <div id="javaContainer">
                        <li id="java"><a href="http://www.basised.com/phoenix/">
                            <h2 className="skillTitle">Java</h2>
                            <img id="javaLogo" src={require('../res/skills/java_white.svg')} alt="java"/>
                            <p className="whiteFont" id="javaText">
                                Inspired by Minecraft, I taught myself Java beginning
                                in the sixth grade.
                                <br/>
                                <br/>
                                Check out my portfolio for sample projects.
                            </p>
                        </a></li>
                    </div>
                    <div id="javascriptContainer">
                        <li id="javascript"><a href="http://gocode.courses">
                            <h2 className="skillTitle">Javascript</h2>
                            <img id="javascriptLogo" src={require('../res/skills/javascript.svg')} alt="javascript"/>
                            <p className="whiteFont" id="javascriptText">
                                Web and mobile development have become my primary focuses.
                                <br/>
                                <br/>
                                Javascript is my language of choice for creating a desirable user experience.
                            </p>
                        </a></li>
                    </div>
                    <div id="reactjsContainer">
                        <li id="reactjs"><a href="http://thegeniusfactory.org">
                            <h2 className="skillTitle">React</h2>
                            <img src={require('../res/skills/react.svg')} alt="react"/>
                            <p className="whiteFont" id="reactjsText">
                                As a fan of efficiency, Facebook's React is my most used tool.
                                <br/>
                                <br/>
                                I made this website with it.
                            </p>
                        </a></li>
                    </div>
                </ul>
                <ul className="skills">
                    <div id="marketingContainer">
                        <li id="marketing">
                            <h2 className="skillTitle">Marketing</h2>
                            <img src={require('../res/skills/marketing.svg')} alt="marketing"/>
                            <p className="whiteFont">
                                Marketing is my primary job at The Genius Factory.
                                <br/>
                                <br/>
                                I'll take you from advertisement to sale.
                            </p>
                        </li>
                    </div>
                    <div id="videoEditingContainer">
                        <li id="videoEditing">
                            <h2 className="skillTitle">Video Editing</h2>
                            <img src={require('../res/skills/premiere.svg')} alt="video editing"/>
                            <p className="whiteFont">
                                Experienced at all types of video projects -- from documentaries
                                to personal projects.
                            </p>
                        </li>
                    </div>
                    <div id="teachingContainer">
                        <li id="teaching">
                            <h2 className="skillTitle">Teaching</h2>
                            <img src={require('../res/skills/teaching_white_2.svg')} alt="teaching"/>
                            <p className="whiteFont">
                                I've spent hundreds of hours tutoring students of all ages.
                                <br/>
                                <br/>
                                Create curricula, organize lessons, and teach material.
                                <br/>
                                <br/>
                                AP Computer Science Teacher's Assistant.
                            </p>
                        </li>
                    </div>
                </ul>
            </div>
        );
    }
}