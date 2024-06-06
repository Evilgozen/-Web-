// import { useState } from 'react'

// const Title = ({text}) => {
//   return (
//     <h1>
//       {text}
//     </h1>
//   )
// }

// const Button = ({ text,onClick }) =>  {
//   return (
//     <button onClick={onClick}>{text}</button>
//   )
// }

// const StatusShow = ({text,number}) => {
//   return (
//     <div>{text} {number}</div>
//   )
// }

// const StatusAverageShow = ({text,status}) => {
//   if(status.good+status.bad+status.neutral==0) {
//     return (
//       <div>{text} {0}</div>
//     )
//   }
//   return(
//     <div>{text} {(status.good - status.bad)/(status.good + status.neutral +status.bad)}</div>
//   )
// }

// const StatusPositive = ({text,status}) => {
//     if(status.good + status.neutral +status.bad==0) {
//       return (
//         <div>{text} {0}{'%'}</div>
//       )
//     }
//     return (
//       <div>{text} {(status.good)/(status.good + status.neutral +status.bad)*100}{'%'}</div>
//     )
// }


// const Statistics = ({text,status}) => {
//   if(status.good==0 && status.bad==0 && status.neutral==0) {
//     return (
//       <>
//         <h1>{text}</h1>
//         <div>No feedback given</div>
//       </>
//     )
//   }
//   return (
//     <>
//       <h1>{text}</h1>
//       <StatusShow text='good' number={status.good} />
//       <StatusShow text='neutral' number={status.neutral} />
//       <StatusShow text='bad' number={status.bad} />
//       <StatusShow text='all' number={status.good + status.neutral +status.bad} />
//       <StatusAverageShow text='average' status={status} />
//       <StatusPositive text='positive' status={status} />
//     </>
//   )
// }

// const App = () => {
//   // save clicks of each button to its own state
//   const [status, setstatus] = useState({
//     good: 0,
//     neutral: 0,
//     bad: 0
//   })

//   const handelgood = () => {
//     const newClicks = {
//       ...status,
//       good:status.good + 1
//     }
//     setstatus(newClicks)
//   }

//   const handelneutral = () => {
//     const newClicks = {
//       ...status,
//       neutral:status.neutral+1
//     }
//     // console.log(status.neutral)
//     setstatus(newClicks)
//   }

//   const handelbad = () => {
//     const newClicks = {
//         ...status,
//         bad: status.bad +1
//     }
//     setstatus(newClicks)
//   }

//   return (
//     <div>
//       <Title text='give feedback' />
//       <Button onClick={handelgood} text='good' />
//       <Button onClick={handelneutral} text='netural' />
//       <Button onClick={handelbad} text='bad' />
//       <Statistics text='statistics' status={status} />
//     </div>
//   )
// }

// export default App


import { useState } from 'react'

const Button =({text,onClick}) => {
  return (
    <button onClick={onClick}>{text}</button>
  )
}

const Title = ({text}) => {
  return (
    <h1>
      {text}
    </h1>
  )
}

const MaxSelectedAnecdotes = ({points,selected,anecdotes}) => {
  // let x=0
  // let t=points[0]
  // for(let i=1;i<=anecdotes.length;i++) {
  //   if(points[i]>t) {
  //     t=points[i]
  //     x=i
  //   }
  // }
  const maxVotes = Math.max(...points)
  const maxIndex= points.indexOf(maxVotes)
  return (
    <>
      <div>{anecdotes[maxIndex]}</div>
      <div>has {points[maxIndex]} votes</div>
    </>
  )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients'
  ]

  const [points, setPoints] = useState (
    Array(anecdotes.length).fill(0)
  )
  const [selected, setSelected] = useState(0)


  const handelSelected = () => {
    let number=selected
    while(selected==number) {
      number=Math.floor((Math.random()*7))
    }
    setSelected(number)
  }

  const handelVote = () => {
    const copy = [...points]
    copy[selected] += 1
    setPoints(copy)
  }

  return (
    <div>
      <Title text='Anecdote of the day' />
      <div>{anecdotes[selected]}</div>
      <div>has {points[selected]} votes</div>
      <Button text='vote' onClick={handelVote} />
      <Button text='next anecdote' onClick={handelSelected} />
      <Title text='Anecdote with most votes' />
      <MaxSelectedAnecdotes points={points} selected={selected} anecdotes={anecdotes} />
    </div>
  )
}

export default App