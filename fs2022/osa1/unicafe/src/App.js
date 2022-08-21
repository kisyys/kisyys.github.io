import { useState } from 'react'

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const Statistics = (props) => {
  return (
    <div>
      <h1> Statistics </h1>
      Good {props.good}
      <br></br>
      Neutral {props.neutral}
      <br></br>
      Bad {props.bad}
      <br></br>
      All {props.good + props.neutral + props.bad}
      <br></br>
      Average {(props.good*1 + props.neutral*0 + props.bad*(-1))/(props.good + props.neutral + props.bad)}
      <br></br>
      Positive {props.good/(props.good + props.neutral + props.bad)*100} %
    </div>
  )
}

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>Give feedback</h1>
      <Button handleClick={() => setGood(good+1)} text="Good" />
      <Button handleClick={() => setNeutral(neutral+1)} text="Neutral" />
      <Button handleClick={() => setBad(bad+1)} text="Bad" />
      <Statistics good={good} bad={bad} neutral={neutral}/>
    </div>
  )
}

export default App
