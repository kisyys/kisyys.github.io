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
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  return (
    <div>
      <Header course={course}/>
      <Content p1={part1.name} e1={part1.exercises} p2={part2.name} e2={part2.exercises} p3={part3.name} e3={part3.exercises}/>
      <Total exercise={part1.exercises + part2.exercises + part3.exercises}/>
    </div>
  )
}

export default App
