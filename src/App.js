import { useState } from 'react'

const History = (props) => {
  if(props.allClicks.length === 0) {
    return (
      <div>
        the app is user by pressing the buttons
      </div>
    )
  }
  return (
    <div>
      button press history:{props.allClicks.join(' ')}
    </div>
  )
}

const Display = ({ counter }) => <div>{counter}</div>

const Button = ({onClick , text}) =>  <button onClick={onClick}>{text}</button>

const App = () => {
  const [clicks,setClicks] = useState({
      Left:0,Right:0
  })

  const [allClicks,steAll] =useState([])

  const handelLeftClick = () => {
    const newClicks = {
      ...clicks,
      Left:clicks.Left +1
    }
    console.log(clicks.Left)
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

  return (
    <>
    <Display counter={clicks.Left} />
    <Button onClick={ handelLeftClick } text='left' />
    <Button onClick={ handelRightClick } text='right' />
    <Display counter={clicks.Right} />
    <p>{allClicks.join(' ')}</p>
    <History allClicks={allClicks} />
    </>
  )
}

export default App