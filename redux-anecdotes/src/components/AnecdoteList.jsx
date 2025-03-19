import { useDispatch, useSelector } from 'react-redux'
import { saveVote } from '../reducers/anecdoteReducer'
import { newNotification } from '../reducers/notificationReducer'

const filterElements = (array, query) => {
  return array.filter(item => item.content.toLowerCase().includes(query.toLowerCase()))
}

const AnecdoteList = () => {
  const dispatch = useDispatch()
  const anecdotes = useSelector(state => filterElements(state.anecdotes, state.filter).toSorted((a, b) => b.votes - a.votes))

  const timeout = () => {
    setTimeout(() => {
      dispatch(newNotification(null))
    }, 5000)
  }

  const vote = (anecdote) => {
    console.log('vote', anecdote.id)
    dispatch(saveVote(anecdote.id))
    dispatch(newNotification(`You voted '${anecdote.content}'`))
    timeout()
  }

  return (
    <div>
      {anecdotes.map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={() => vote(anecdote)}>vote</button>
          </div>
        </div>
      )}
    </div>
  )
}

export default AnecdoteList