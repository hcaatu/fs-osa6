import axios from 'axios'

const baseUrl = 'http://localhost:3001/anecdotes'

export const getAnecdotes = () => {
  const response = axios.get(baseUrl).then(res => res.data)
  return response
}

export const createAnecdote = content => {
  const object = { content, votes: 0 }
  const response = axios.post(baseUrl, object).then(res => res.data)
  return response
}

export const updateAnecdote = updatedAnecdote => {
  const id = updatedAnecdote.id
  const response = axios.put(`${baseUrl}/${id}`, updatedAnecdote).then(res => res.data)
  return response
}