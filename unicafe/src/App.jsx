import { useState } from 'react'

const App = () => {
  // guarda los clics de cada botón en su propio estado
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  var all = (good + neutral + bad)
  var average = ((good - bad) / all)
  var positive = ((good * 100) / all)

  return (
    <div>
      <h1>Give Feedback</h1>
      <p></p>
      <button onClick={()=>setGood(good + 1)}>Good</button>
      <button onClick={()=>setNeutral(neutral + 1)}>Neutral</button>
      <button onClick={()=>setBad(bad + 1)}>Bad</button>
      <p></p>
      <h1>Statistics</h1>
      <p></p>
      <p>Good {good}<br/> Neutral {neutral}<br/> Bad {bad}</p>
      <p></p>
      <p>All {all}<br/> Average {average}<br/> Positive {positive}</p>
    </div>
  )
}

export default App
