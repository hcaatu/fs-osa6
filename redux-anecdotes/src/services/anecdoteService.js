import axios from 'axios'

const baseUrl = 'http://localhost:3001/anecdotes'

const getAll = async () => {
  const res = await axios.get(baseUrl)
  return res.data
}

const createAndSaveNew = async (content) => {
  const object = { content, votes: 0 }
  const res = await axios.post(baseUrl, object)
  return res.data
}

const update = async (id) => {
  const res = await axios.get(`${baseUrl}/${id}`)
  const anecdote = res.data
  console.log(anecdote)
  const updatedAnecdote = {
    ...anecdote, votes: anecdote.votes + 1
  }
  const response = await axios.put(`${baseUrl}/${id}`, updatedAnecdote)
}

export default { getAll, createAndSaveNew, update }