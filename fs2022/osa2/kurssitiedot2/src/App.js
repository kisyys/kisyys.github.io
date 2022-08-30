const Course = (props) => {
  return (
    <div>
      {props.courses.map(c1 => (
        <div key={c1.id}>  
            <h2>
              {c1.name}
            </h2>           
          {c1.parts.map(p1 =>
            <p key={p1.id}>         
                {p1.name} {p1.exercises} 
            </p>
          )}
          <b> total of {c1.parts.reduce((sum, c2) => sum = sum + c2.exercises, 0)} exercises </b>
        </div>
      ))}
    </div>
  )
}

const App = () => {
  const courses = [
    {
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
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    }, 
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]

  return (
    <div>
      <h1>Web development curriculum</h1>
      <Course courses={courses}  />
    </div>
  )
}

export default App
