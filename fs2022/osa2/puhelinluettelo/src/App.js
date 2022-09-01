import { useState } from 'react'

const Persons = (props) => {
  return (
    <div>
      {props.contactsToShow.map(person => 
        <div key={person.name}>
          <p>
            {person.name} {person.number}
          </p>
        </div>
      )}
    </div>
  )
}

const Filter = (props) => {
  return (
    <div>
      filter shown with: <input value={props.showAll} onChange={props.handleContactChange3}/>
    </div>
  )
}

const PersonForm = (props) => {
  return (
    <form onSubmit={props.addContact}>
    <div>
      name: <input value={props.newName} onChange={props.handleContactChange}/>
      <br></br>
      number: <input value={props.newNumber} onChange={props.handleContactChange2}/>
    </div>
    <div>
      <button>add</button>
    </div>
  </form>
  )
}

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ])
  
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

  const [showAll, setShowAll] = useState('')

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
    setNewName(event.target.value)   
  }

  const handleContactChange2 = (event) => {
    setNewNumber(event.target.value)    
  }

  const handleContactChange3 = (event) => {
    setShowAll(event.target.value)  
  }

  const contactsToShow  = 
  showAll ===""
  ? persons
  : persons.filter(person => person.name.toLowerCase().includes(showAll.toLowerCase()))


  return (
    <div>
      <h2>Phonebook</h2>
      <Filter showAll={showAll} handleContactChange3={handleContactChange3}/>
      <h2>Add a new one</h2>
      <PersonForm addContact={addContact} newName={newName} handleContactChange={handleContactChange} newNumber={newNumber} handleContactChange2={handleContactChange2}/>
      <h2>Numbers</h2>
      <Persons contactsToShow={contactsToShow}/>
    </div>
  )

}

export default App
