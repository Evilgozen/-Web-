import { useState } from 'react'

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
      <div> filter shown with
        <input 
          onChange={handelwithSearch}
        />
      </div>
      <form onSubmit= {addPerson}>
        <div>
          name: <input 
            value={newName}
            onChange={handelNameChange}  
          />
        </div>
        <div>
          number: <input 
            value={newnumber}
            onChange={handelNumberChange}
          />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
        <ul>
          {personsShow.map(person => 
            <div key={person.name}>{person.name} {person.number}</div>
          )}
        </ul>
    </div>
  )
}

export default App