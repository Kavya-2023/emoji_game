import React from "react";
import './index.css';
class NavBar extends React.Component{
    render(){
        const{score,topScore}=this.props
        return(
            <nav className="navbar">
                <div className="logo-container">
                    <img src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png" alt="logo" className="logo"/>
                    <span className="logo-name">Emoji Game</span>
                </div>
                <div className="score-container">
                    <p className="scores">Score:<span >{score}</span></p>
                    <p className="scores">TopScore:<span>{topScore}</span></p>
                </div>
            </nav>
        );
    }
}
export default NavBar;