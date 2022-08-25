import { useState } from 'react'

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

let index = 0
let index2 = 0
let most = 0

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when dianosing patients.'
  ]

  const [selected, setSelected] = useState(0)

  const [points, setPoints] = useState([0, 0, 0, 0, 0, 0, 0])
  const copy = [...points]

  const getAnecdote = () => {
    let random = Math.floor(Math.random() * anecdotes.length)
    setSelected(random)
    index = random
  }

  
  const updatePoints = () => {
    copy[index] +=1 
    setPoints(copy)
    console.log(copy.length)   
  }

  for(let i = 0; i<copy.length;i++) { 
    if(copy[i]>most) {
      most = copy[i]
      index2 = i
    }
  }

  return (
    <div>
      <h1>Anecdote of the day</h1>
      {anecdotes[selected]}
      <br></br>
      <Button handleClick={() => updatePoints()} text="vote" />    
      <Button handleClick={() => getAnecdote()} text="next anecdote" />
      <br></br>
      has {copy[index]} votes
      <h1>Anecdote with most votes</h1>
      {anecdotes[index2]}
      <br></br>
      has {copy[index2]} votes

    </div>
  )
}

export default App
