import React from 'react'
import StatisticLine from './StatisticLine'

const Statistics = ({good, neutral, bad}) => {
    //vars
    var all = (good + neutral + bad)
    var average = ((good - bad) / all)
    var positive = ((good * 100) / all)

    return ( all > 0 ? (
        <div>
            <h1>Statistics</h1>
            <table>
            <StatisticLine text="Good" value={good}></StatisticLine>
            <StatisticLine text="Neutral" value={neutral}></StatisticLine>
            <StatisticLine text="Bad" value={bad}></StatisticLine>
            <p></p>
            <StatisticLine text="All" value={all}></StatisticLine>
            <StatisticLine text="Average" value={average}></StatisticLine>
            <StatisticLine text="Positive" value={positive}></StatisticLine>
            </table>
        </div>) : (
            <div>
            <h1>Statistics</h1>
            <p></p>
            <p>No feedback given.</p>
            </div>
          )
        )
}

export default Statistics