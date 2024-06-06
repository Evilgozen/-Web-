import { useState } from 'react'

const Title = ({text}) => {
  return (
    <h1>
      {text}
    </h1>
  )
}

const Button = ({ text,onClick }) =>  {
  return (
    <button onClick={onClick}>{text}</button>
  )
}

const StatusShow = ({text,number}) => {
  return (
    <div>{text} {number}</div>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [status, setstatus] = useState({
    good: 0,
    neutral: 0,
    bad: 0
  })

  const handelgood = () => {
    const newClicks = {
      ...status,
      good:status.good + 1
    }
    setstatus(newClicks)
  }

  const handelneutral = () => {
    const newClicks = {
      ...status,
      neutral:status.neutral+1
    }
    console.log(status.neutral)
    setstatus(newClicks)
  }

  const handelbad = () => {
    const newClicks = {
        ...status,
        bad: status.bad +1
    }
    setstatus(newClicks)
  }

  return (
    <div>
      <Title text='give feedback' />
      <Button onClick={handelgood} text='good' />
      <Button onClick={handelneutral} text='netural' />
      <Button onClick={handelbad} text='bad' />
      <Title text='statistics' />
      <StatusShow text='good' number={status.good} />
      <StatusShow text='neutral' number={status.neutral} />
      <StatusShow text='bad' number={status.bad} />
    </div>
  )
}

export default App