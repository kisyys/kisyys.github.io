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

  export default Course
