import './index.css'
const WinorLoseCard=(props)=>{
    const{isWin,score,onPlayAgain}=props
    const url=isWin ? "https://assets.ccbp.in/frontend/react-js/won-game-img.png" : "https://assets.ccbp.in/frontend/react-js/lose-game-img.png";
    const scoreText1=isWin?"Won":"Lose";
    const scoreText2=isWin?"Best Score":"Score"
    return(
        <div className="card-container">
            <div className="left-container">
                <p className="score-text">You <span>{scoreText1}</span></p>
                <p className="score-text">{scoreText2}</p>
                <p className="score-board"><span>{score}</span>/12</p>
                <button className="button" onClick={onPlayAgain}>Play Again</button>
            </div>
            <div className="right-container">
                <img src={url} alt="image" className="card-img"/>
            </div>
        </div>
    )
}
export default WinorLoseCard;