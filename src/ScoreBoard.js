import React from 'react'

const ScoreBoard = ({score, retry}) =>{

    return(
        <div className="score-board"> 
            <div className="score"> Your score is {score} / 5 correct answer ! ! ! </div> 
            <button className="playBtn" onClick={retry}> Play Again </button> 
        </div>
    );

}

export default ScoreBoard;