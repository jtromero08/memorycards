import React, { useState } from "react";

export default function CardBoard() {
    const [score, setScore] = useState(0)
    return (
        <div>
            <h1>
                Score: <span id="result">{score}</span>
            </h1>
            <div></div>
        </div>
    )
}