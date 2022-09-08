import { useState, useEffect } from 'react'
import contactService from './services/persons'

const Persons = (props) => {
  return (
    <div>
      {props.contactsToShow.map(person => 
        <div key={person.name}>
          <p>
            {person.name} {person.number} <button onClick={() => props.deleteContact(person.id)}> delete</button>
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

const Notification = (props) => {
  if (props.message === null) {
    return null
  }

  return (
    <div className="notification">
      {props.message}
    </div>
  )
}



const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [showAll, setShowAll] = useState('')
  const [message, setMessage] = useState(null)

  useEffect(() => {
    contactService
      .getAll()
      .then(initialContacts => {
        setPersons(initialContacts)
      })
  }, [])

  const addContact = (event) => {
    if(persons.find(element => element.name === newName)) {
      let isExecuted = window.confirm(`${newName} is already added to phonebook, replace the old number with a new one?`)
      
      if(isExecuted===true) {
          event.preventDefault() 
          const person = persons.find(n => n.name === newName)
          const changedContact = { ...person, number: newNumber}
          contactService
          .update(person.id, changedContact)
            .then(returnedContact => {
            setPersons(persons.map(person2 => person2.id !== person.id ? person2 : returnedContact))
          })
          setNewName('')
          setNewNumber('')
          setMessage(
            `Number changed for ${newName}`
          )
          setTimeout(() => {
            setMessage(null)
          }, 2000)
      } else {
        event.preventDefault()
        setNewName('')
        setNewNumber('')
      }
    } else {
      event.preventDefault()
      const contactObject = {
        name: newName,
        number: newNumber
      }
      contactService
      .create(contactObject)
      .then(returnedContact => {
        setPersons(persons.concat(returnedContact))
          setNewName('')
          setNewNumber('')
      })
      setMessage(
        `Added ${newName}`
      )
      setTimeout(() => {
        setMessage(null)
      }, 2000)
    }   
  }

  const deleteContact = id => {
    const person = persons.find(n => n.id === id)
    let isExecuted = window.confirm(`Delete ${person.name} ?`)
    
    if(isExecuted===true) {
      contactService
      .del(id)
      .then(() => 
        setPersons(persons.filter(person => person.id !== id ))
      )
      setMessage(
        `Contact ${person.name} deleted`
      )
      setTimeout(() => {
        setMessage(null)
      }, 2000) 
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
      <Notification message={message} />
      <Filter showAll={showAll} handleContactChange3={handleContactChange3}/>
      <h2>Add a new one</h2>
      <PersonForm addContact={addContact} newName={newName} handleContactChange={handleContactChange} newNumber={newNumber} handleContactChange2={handleContactChange2}/>
      <h2>Numbers</h2>
      <Persons contactsToShow={contactsToShow} deleteContact={deleteContact}/>
    </div>
  )
}

export default App
