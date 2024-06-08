import { useState } from 'react'
import Filter from './components/Filter'
import Person from './components/Person'
import PersonForm from './components/PersonForm'

const App = () => {
  const [persons, setPersons] = useState([
      { name: 'Arto Hellas', number: '040-123456', id: 1 },
      { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
      { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
      { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])
  const [newName, setNewName] = useState('')
  const [newnumber,setNewNumber] =useState('');
  const [showName, setShowName] = useState('')
  const [personsShow, setPersonsShow] =useState(persons)

  const addPerson = (event) => {
    event.preventDefault()
    const newPerson = {
      name:newName,
      number:newnumber
    }

    if(persons.some(person => person.name===newPerson.name)) 
      {
        console.log(newPerson)
        alert(`${newName} is already added to phonebook`)
      }
    else {
            setPersons(persons.concat(newPerson))
            setNewName('')
            setNewNumber('')
    }
  }

  const handelNameChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  const handelNumberChange = (event) => {
    console.log(event.target.value)
    setNewNumber(event.target.value)
  }

  const handelwithSearch = (event) => {
    setShowName(event.target.value)
    console.log(event.target.value)
    // console.log(showName)
      
    const filterPersons=persons.filter(person => 
      person.name.toLowerCase().includes(event.target.value.toLowerCase())
    )

    console.log(filterPersons)
    setPersonsShow(filterPersons)
    console.log(personsShow)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      
      <Filter handelwithSearch={handelwithSearch} />

      <h3>Add a new</h3>
      
      <PersonForm newName={newName} newnumber={newnumber} 
      handelNameChange={handelNameChange} handelNumberChange={handelNumberChange} addPerson={addPerson} />

      <h2>Numbers</h2>

      <Person personsShow={personsShow} />
    </div>
  )
}

export default App