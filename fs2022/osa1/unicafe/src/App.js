import { useState } from 'react'

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

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
      <h1> Statistics </h1>
      Good {good}
      <br></br>
      Neutral {neutral}
      <br></br>
      Bad {bad}
      <br></br>
      All {good + neutral + bad}
      <br></br>
      Average {(good*1 + neutral*0 + bad*(-1))/(good + neutral + bad)}
      <br></br>
      Positive {good/(good + neutral + bad)*100} %
    </div>
  )
}

export default App
