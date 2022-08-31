import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: "112" }
  ])
  
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

  const addContact = (event) => {
    if(persons.find(element => element.name === newName)) {
        alert(`${newName} is already added to phonebook`)
        event.preventDefault()
        setNewName('')
        setNewNumber('')
    } else {
      event.preventDefault()
      const contactObject = {
        name: newName,
        number: newNumber
      }
    
      setPersons(persons.concat(contactObject))
      setNewName('')
      setNewNumber('')
    }
    
  }

  const handleContactChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)   
  }

  const handleContactChange2 = (event) => {
    console.log(event.target.value)
    setNewNumber(event.target.value)    
  }


  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addContact}>
        <div>
          name: <input value={newName} onChange={handleContactChange}/>
          <br></br>
          number: <input value={newNumber} onChange={handleContactChange2}/>
        </div>
        <div>
          <button>add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map(person => 
        <div key={person.name}>
          <p>
            {person.name} {person.number}
          </p>
        </div>
      )}
    </div>
  )

}

export default App
