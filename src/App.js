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

const StatusAverageShow = ({text,status}) => {
  if(status.good+status.bad+status.neutral==0) {
    return (
      <div>{text} {0}</div>
    )
  }
  return(
    <div>{text} {(status.good - status.bad)/(status.good + status.neutral +status.bad)}</div>
  )
}

const StatusPositive = ({text,status}) => {
    if(status.good + status.neutral +status.bad==0) {
      return (
        <div>{text} {0}{'%'}</div>
      )
    }
    return (
      <div>{text} {(status.good)/(status.good + status.neutral +status.bad)*100}{'%'}</div>
    )
}


const Statistics = ({text,status}) => {
  if(status.good==0 && status.bad==0 && status.neutral==0) {
    return (
      <>
        <h1>{text}</h1>
        <div>No feedback given</div>
      </>
    )
  }
  return (
    <>
      <h1>{text}</h1>
      <StatusShow text='good' number={status.good} />
      <StatusShow text='neutral' number={status.neutral} />
      <StatusShow text='bad' number={status.bad} />
      <StatusShow text='all' number={status.good + status.neutral +status.bad} />
      <StatusAverageShow text='average' status={status} />
      <StatusPositive text='positive' status={status} />
    </>
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
    // console.log(status.neutral)
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
      <Statistics text='statistics' status={status} />
    </div>
  )
}

export default App