import React from 'react'

const Statistics = ({good, neutral, bad}) => {
    //vars
    var all = (good + neutral + bad)
    var average = ((good - bad) / all)
    var positive = ((good * 100) / all)

    return ( all > 0 ? (
        <div>
            <h1>Statistics</h1>
            <p></p>
            <p>Good {good}<br /> Neutral {neutral}<br /> Bad {bad}</p>
            <p></p>
            <p>All {all}<br /> Average {average}<br /> Positive {positive} %</p>
        </div>) : (
            <p>No feedback given.</p>
          )
        )
}

export default Statistics