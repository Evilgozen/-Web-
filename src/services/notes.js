import axios from 'axios'
const baseUrl = 'http://localhost:3001/notes'

const getAll = () => {
  const request=axios.get(baseUrl)
  return request.then(response => response.data)
}

const create = newObject => {
  const required= axios.post(baseUrl, newObject)
  return required.then(response => response.data)
}

const update = (id, newObject) => {
  const required = axios.put(`${baseUrl}/${id}`, newObject)
  return required.then(response => response.data)
}

export default {
  getAll: getAll,
  create: create,
  update: update
}