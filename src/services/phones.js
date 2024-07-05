import React from 'react'
import axios from 'axios'
const baseUrl = 'http://localhost:3002/phones'

const getAll = () => {
    const request = axios.get(baseUrl)
    return request.then(respon => respon.data)
}

const create = newObject => {
    const request = axios.post(baseUrl,newObject)
    return request.then(respon => respon.data)
}

const deletethis = phone => {
    console.log(phone.id)
    const request = axios.delete(baseUrl+'/'+phone.id)
    return request.then(respon => respon.data) 
}

const upgrade = (id,newObject) => {
    const request = axios.put(`${baseUrl}/${id}`,newObject)
    return request.then(response => response.data)
}

export default {
    getAll,
    create,
    deletethis,
    upgrade
}