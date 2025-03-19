import { useDispatch, useSelector } from 'react-redux'
import { addVote } from '../reducers/anecdoteReducer'

const filterElements = (array, query) => {
  console.log('array: ', array)
  console.log('query: ', query)
  return array.filter(item => item.content.toLowerCase().includes(query.toLowerCase()))
}

const AnecdoteList = () => {
  const dispatch = useDispatch()
  const anecdotes = useSelector(state => state.anecdotes)
  const filter = useSelector(state => state.filter)
    
  console.log(anecdotes)
  console.log(filter)

  const filteredList = filterElements(anecdotes, filter).toSorted((a, b) => b.votes - a.votes)
  console.log(filteredList)

  const vote = (id) => {
    console.log('vote', id)
    dispatch(addVote(id))
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
            <button onClick={() => vote(anecdote.id)}>vote</button>
          </div>
        </div>
      )}
    </div>
  )
}

export default AnecdoteList