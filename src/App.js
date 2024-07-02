import { useState, useEffect } from 'react'
import axios from 'axios'
import Phone from './components/Phone'
import phoneService from './services/phones'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ])
  const [newName, setNewName] = useState('a new name...')
  const [phones, setPhones] =useState([])
  const [newNumber, setNewNumber] =useState('a new number...')
  const [showPhones, setshowPhones] = useState([])
  const [newFilter, setnewFilter] = useState('')

  useEffect(()=> {
    phoneService
      .getAll()
      .then(initialPhones => {
        setPhones(initialPhones)
        setshowPhones(initialPhones)
      })
  },[])

  useEffect(()=> {
    if(newFilter==='') {
      setshowPhones(phones)
    }else {
      setshowPhones(phones.filter(phone => {
        return phone.name.toLowerCase().includes(newFilter)
      }))
    }
  },[newFilter,phones])


  const handlefilter = (event) => {
    if(event.target.value==='') {
      setshowPhones(phones)
    }
    console.log(event.target.value)
    setshowPhones(phones.filter(phone => {
      return phone.name.toLowerCase().includes(event.target.value)
    }))
    setnewFilter(event.target.value)
  }

  const handledelete = phone => event =>  {
    console.log(phone)
    if(window.confirm("你确定要删除该电话记录吗?")) {
      phoneService
      .deletethis(phone)
      .then(respon => {
        const updatedPhones = phones.filter(p => p.id !== phone.id)
        setPhones(updatedPhones)
        setshowPhones(updatedPhones)
      })
    }
  } 

  const addnewName = (event) => {
      event.preventDefault()
      const newObject = {
        name:newName,
        number:newNumber
      }
      
      let same=false;
      if(phones.some(e => e.name===newObject.name)) {
        const thisId=phones.filter(e => e.name===newObject.name)[0].id
        if(window.confirm("已经有该用户信息，是否更新用户信息?")) {
          console.log("here:",thisId)
          phoneService
            .upgrade(thisId,newObject)
            .then(response => {
              const updatePhones = phones.map(p => p.id===thisId ? newObject : p)
              setPhones(updatePhones)
              setshowPhones(updatePhones)
            })
        }
      }
      else {
        phoneService
        .create(newObject)
        .then(respon => {
          setPhones(phones.concat(respon))
          setNewName('')
          setNewNumber('')
        })
      }
  }

  const handleNameChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <div>筛选:<input onChange={handlefilter} /></div>
      <form onSubmit={addnewName}>
        <div>
          name: <input 
                    value={newName}
                    onChange={handleNameChange} />
          number: <input
                    value={newNumber}
                    onChange={handleNumberChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <Phone phones={showPhones} handledelete={handledelete}/>
    </div>
  )
}

export default App