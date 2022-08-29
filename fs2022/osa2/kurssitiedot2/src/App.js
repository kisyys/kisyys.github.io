const Course = (props) => {
  console.log(props)
  return (
    <div>
      <Header h={props.h}/>
      <Content p={props.p}/>
      <Total n={props.n}/>
    </div>
  )
}

const Header = (props) => {
  return (
    <h1>
      {props.h}
    </h1>
  )
}

const Content = (props) => {
  return ( 
    <div>
      <Part p={props.p}/>
    </div>
  )
}

const Part = (props) => {
  return (
    <div>
      {props.p.map(p1 => 
        <p key={p1.id}>
          {p1.name} {p1.exercises}
        </p>
        )}
    </div>
  )
}

const Total = (props) => {
  return (
    <b>
      Total of {props.n.reduce((s, e) => s + e.exercises,0)} exercises
    </b>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    id: 1,
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      }
    ]
  }

  return (
    <div>
      <Course h={course.name} p={course.parts} n={course.parts} />
    </div>
  )
}

export default App
