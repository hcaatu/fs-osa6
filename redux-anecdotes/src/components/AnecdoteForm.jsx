import { useDispatch } from 'react-redux'
import { createNew } from '../reducers/anecdoteReducer'
import anecdoteService from '../services/anecdoteService' 

const AnecdoteForm = () => {
  const dispatch = useDispatch()

  const addAnecdote = async (event) => {
    event.preventDefault()
    const content = event.target.anecdote.value
    event.target.anecdote.value = ''
    const newAnecdote = await anecdoteService.createAndSaveNew(content)
    console.log(newAnecdote)
    dispatch(createNew(newAnecdote))
  }

  return (
    <div>
      <h2>create new</h2>
      <form onSubmit={addAnecdote}>
        <input name='anecdote' type='text'/>
        <button type='submit'>create</button>
      </form>
    </div>
  )
}

export default AnecdoteForm