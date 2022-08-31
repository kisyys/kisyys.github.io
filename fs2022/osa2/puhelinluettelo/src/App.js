import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ])
  
  const [newName, setNewName] = useState('')

  const addContact = (event) => {
    event.preventDefault()
    const contactObject = {
      name: newName,
      
    }
  
    setPersons(persons.concat(contactObject))
    setNewName('')
  }

  const handleContactChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }


  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addContact}>
        <div>
          name: <input value={newName} onChange={handleContactChange}/>
        </div>
        <div>
          <button>add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map(person => 
        <p>
          {person.name}
        </p>

      )}
    </div>
  )

}

export default App
