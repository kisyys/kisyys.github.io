import { useState } from 'react'

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const Statistics = (props) => {
  return (
    <div>
      <StatisticLine text="Good" value={props.good}/>
      <StatisticLine text="Neutral" value={props.neutral}/>
      <StatisticLine text="Bad" value={props.bad}/>
      <StatisticLine text="All" value={props.good + props.bad + props.neutral}/>
      <StatisticLine text="Average" value={((props.good*1 + props.neutral*0 + props.bad*(-1))/(props.good + props.neutral + props.bad)).toFixed(1)}/>
      <StatisticLine text="Positive" value={(props.good/(props.good + props.neutral + props.bad)*100).toFixed(1) + " %"}/> 
    </div>
  ) 
}

const StatisticLine = (props) => {
  return (
    <table>
      <tbody>
        <tr>
          <td width="70px">
            {props.text}
          </td>
          <td>
            {props.value}
          </td>
        </tr>
      </tbody>
    </table>
  ) 
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  if(good+neutral+bad>0) {
    return (
      <div>
        <h1>Give feedback</h1>
        <Button handleClick={() => setGood(good+1)} text="Good" />
        <Button handleClick={() => setNeutral(neutral+1)} text="Neutral" />
        <Button handleClick={() => setBad(bad+1)} text="Bad" />
        <h1>Statistics</h1>
        <Statistics text good={good} neutral={neutral} bad={bad}/>
      </div>
    )
  }
  else {
    return (
      <div>
        <h1>Give feedback</h1>
        <Button handleClick={() => setGood(good+1)} text="Good" />
        <Button handleClick={() => setNeutral(neutral+1)} text="Neutral" />
        <Button handleClick={() => setBad(bad+1)} text="Bad" />
        <h1>Statistics</h1>
        No feedback given
      </div>
    )
  } 
}

export default App
