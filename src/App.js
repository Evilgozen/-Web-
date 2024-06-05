import { useState } from 'react'

const App = () => {

  const [ counter,setCounter ]=useState(0)


  const handleClick = () => {
    console.log('clicked')
  }

  const increaseBtOne = () => setCounter(counter +1)
  const setToZero = () => setCounter(0)
  const decreaseBtOne = () => setCounter(counter -1 )

  const Button = ({onClick , text}) =>  <button onClick={onClick}>{text}</button>
  
  const Display = ({ counter }) => <div>{counter}</div>
  return (
    <>
    <Display counter={counter} />
    <Button onClick={increaseBtOne} text='plus' />
    <Button onClick={ setToZero } text='zero' />
    <Button onClick={ decreaseBtOne } text='minus' />
    </>
  )
}

export default App