import React from "react"
import axios from 'axios'
import PhoneService from './../services/phones'


const Phone = ({phones,handledelete}) => {
    return (
        phones.map(phone => {
            return (
                <li key={phone.id}>
                    {phone.name} {phone.number} 
                    <button onClick={handledelete(phone)} >delete</button>
                </li>
            )
        })
    )
}

export default Phone