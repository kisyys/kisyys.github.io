import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ])
  
  const [newName, setNewName] = useState('')

  const addContact = (event) => {
    if(persons.find(element => element.name == newName)) {
        alert(`${newName} is already added to phonebook`)
        event.preventDefault()
        setNewName('')
    } else {
      event.preventDefault()
      const contactObject = {
        name: newName,
        
      }
    
      setPersons(persons.concat(contactObject))
      setNewName('')
    }
    
  }

  const handleContactChange = (event) => {
    //console.log(event.target.value)
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
        <div key={person.name}>
          <p>
            {person.name}
          </p>
        </div>
      )}
    </div>
  )

}

export default App
