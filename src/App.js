import { useState } from 'react'

const App = () => {
  const [clicks,setClicks] = useState({
      Left:0,Right:0
  })

  const [allClicks,steAll] =useState([])

  const handelLeftClick = () => {
    const newClicks = {
      Left: clicks.Left+1,
      ...clicks
    }
    steAll(allClicks.concat('L'))
    setClicks(newClicks)
  }

  const handelRightClick = () => {
    const newClicks = {
      ...clicks,
      Right: clicks.Right+1
    }
    steAll(allClicks.concat('R'))
    setClicks(newClicks)
  }


  const Button = ({onClick , text}) =>  <button onClick={onClick}>{text}</button>
  
  const Display = ({ counter }) => <div>{counter}</div>
  return (
    <>
    <Display counter={clicks.Left} />
    <Button onClick={handelLeftClick} text='left' />
    <Button onClick={ handelRightClick } text='right' />
    <Display counter={clicks.Right} />
    <p>{allClicks.join(' ')}</p>
    </>
  )
}

export default App