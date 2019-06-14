import React from 'react';
import '../styles/App.css';
import logo from '../images/Logo.png';

export default class App extends React.Component {
    render() {

        return ( 
            <div className="App">
                <div className="img-container">.
                    <img className="logo" src={logo} alt="logo"/>
                </div>                
                <div className="modal-background">
                    <div className="video-container">
                    <iframe
                        className="twitch-video"
                        src="https://player.twitch.tv/?video=v341923777&autoplay=false"
                        height="280"
                        width="450"
                        frameborder="0"
                        scrolling="no">
                    </iframe>
                    </div>
                    <p className="qNum">
                        Question 1
                    </p>
                    <p className="question">
                        What is the symbol for the EOS Blockchain?
                    </p>
                    <div className="answers">
                        <button className="answer">Chestahedron</button>
                        <button className="answer">Chestahedron</button>
                        <button className="answer">Chestahedron</button>
                        <button className="answer">Chestahedron</button>
                    </div>
                </div>
                                 
            </div>
        )
    }
}