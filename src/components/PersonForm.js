import React from 'react'

const PersonForm = ({newName,newnumber,handelNameChange,handelNumberChange,addPerson}) => {
    return (
        <form onSubmit= {addPerson}>
        <div>
          name: <input 
            value={newName}
            onChange={handelNameChange}  
          />
        </div>
        <div>
          number: <input 
            value={newnumber}
            onChange={handelNumberChange}
          />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
    )
}

export default PersonForm