import { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'
import Note from './components/Note'


const Show = ({onClick,setSelectCountry}) => {
  const handleClick = () => {
    setSelectCountry(true)
    onClick();
  }
  return (
    <>
      <button onClick={handleClick}>show</button>
    </>
  )
}

const Country = ({Countrys,Filter}) => {
  const [showCountrys,setShowCountrys] = useState([])
  const [selectedCountry, setSelectCountry] = useState(false)

  const handelShowCountry = (country) => {
    console.log("this is the countries",country)
    setShowCountrys([country])
    // console.log(showCountrys)
  }

  useEffect(()=> {
    setSelectCountry(false)
  },[Filter])

  useEffect(()=> {
    if(!selectedCountry) {
      const filterCountrys=Countrys.filter(country => country.name.common.toLowerCase().includes(Filter.toLowerCase()))
      setShowCountrys(filterCountrys)
    }
  },[Countrys,Filter,selectedCountry])

  console.log(showCountrys)
  if(showCountrys.length==1 || selectedCountry) {
    console.log(showCountrys[0].languages)
    return (
      <>
        <h4>{showCountrys[0].name.common}</h4>
        <div>capital: {showCountrys[0].capital}</div>
        <div>area: {showCountrys[0].area}</div>
        <h4>languages:</h4>
        <div>
          { Object.values(showCountrys[0].languages).map(country =>
              <li key={country}>{country}</li>
          )}
        </div>
        <br />
        <img src={showCountrys[0].flags.png}/>
      </>
    )
  }

  if(showCountrys.length>10) {
    return (
      <div>There have too much countries,specify your filter</div>
    )
  }

  return (
    <ul>
      { showCountrys.map((country,index) => 
      <li className="flex-container" key={index}>
        <div>{country.name.common}</div>
        <Show onClick={()=>handelShowCountry(country)} setSelectCountry={setSelectCountry} />
      </li> 
      )}
    </ul>
  )
}

const App = () => {
  const [Countrys, setCountrys] = useState([])
  const [Filter, setFilter] = useState('')
  const [error,setError] =useState(null)

  useEffect(()=> {
    console.log('effected')
    axios
      .get('https://restcountries.com/v3.1/all')
      .then(r => {
        console.log('promise fulfilled')
        console.log(r.data)
        setCountrys(r.data)
        // console.log(Countrys)
      })
      .catch(error => {
        console.error('Error fetching countries:',error)
        setError('Fail to fecth countries.Please try again later.')
      })
  },[])
  
  // console.log('render', notes.length, 'notes')

  const handleCountryChange = (event) => {
    setFilter(event.target.value)
  }

  return (
    <div>
      <h1>country data</h1>
      find countries
      <input values={Filter} onChange={handleCountryChange} />
      <Country Countrys={Countrys} Filter={Filter} />
    </div>
  )
}

export default App