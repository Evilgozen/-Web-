import React from 'react'

const Filter = ({handelwithSearch}) => {
    return (
        <>
            <div> filter shown with
            <input 
            onChange={handelwithSearch}
            />
            </div>
        </>
    )
}

export default Filter