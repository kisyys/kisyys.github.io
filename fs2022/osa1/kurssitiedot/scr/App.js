const Header = (props) => {
  return (
    <div>
      <h1>
        {props.course}
      </h1>
    </div>
  )
}

const Content = (props) => {
  return (
    <div>
      <Part p={props.p1} e={props.e1} />
      <Part p={props.p2} e={props.e2} />
      <Part p={props.p3} e={props.e3} />
    </div>
  )
}

const Part = (props) => {
  return (
      <p>
        {props.p} {props.e}
      </p>
  )
}

const Total = (props) => {
  return (
    <div>
      <p>
        Number of exercises {props.exercise}
      </p>
    </div>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header course={course}/>
      <Content p1={part1} e1={exercises1} p2={part2} e2={exercises2} p3={part3} e3={exercises3}/>
      <Total exercise={exercises1 + exercises2 + exercises3}/>
    </div>
  )
}

export default App
