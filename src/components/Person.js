import React from 'react'

const Person = ({personsShow}) =>{
    return (
        <ul>
          {personsShow.map(person => 
            <div key={person.name}>{person.name} {person.number}</div>
          )}
        </ul>
    )
}

export default Person