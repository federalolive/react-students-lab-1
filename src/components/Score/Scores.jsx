import React from "react"


const Scores = (props) => {
    return (
        <div>
            {props.scores.map((score, idx) =>
            <div>
                <p>Score: {score.score}</p>
                <p>Date: {score.date}</p>
            </div>
            )}
        </div>
    )
}


export default Scores