import React from 'react'
import "./score.css"

const Score = ({score}) => {
    return (
        <div className="score_div">
            <h2>Score</h2>
            <p>{score}</p>
        </div>
    )
}

export default Score
