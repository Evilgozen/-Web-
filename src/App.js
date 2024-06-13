import { useState, useEffect } from 'react'
import axios from 'axios'
import Note from './components/Note'


const Country = ({Countrys,Filter}) => {
  const showCountrys=Countrys.filter(country => country.name.common.toLowerCase().includes(Filter.toLowerCase()))
  console.log(showCountrys)
  if(showCountrys.length==1) {
    console.log(showCountrys[0].languages)
    return (
      <>
        <h4>{showCountrys[0].name.common}</h4>
        <div>capital: {showCountrys[0].capital}</div>
        <div>area: {showCountrys[0].area}</div>
        <h4>languages:</h4>
        <div>
          { Object.values(showCountrys[0].languages).map(country =>
              <li>{country}</li>
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
      { showCountrys.map((country,index) => <div key={index}>{country.name.common}</div>)}
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