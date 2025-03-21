import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { getAnecdotes, updateAnecdote } from './requests'

import AnecdoteForm from './components/AnecdoteForm'
import Notification from './components/Notification'

import { useMessageDispatch } from './Context'

const App = () => {
  const queryClient = useQueryClient()
  const dispatch = useMessageDispatch()

  const updateAnecdoteMutation = useMutation({
    mutationFn: updateAnecdote,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['anecdotes'] })
    }
  })

  const handleVote = (anecdote) => {
    console.log('vote', anecdote.id)
    const updatedAnecdote = {
      ...anecdote, votes: anecdote.votes + 1
    }
    dispatch({ type: 'NEW_MESSAGE', payload: `You voted for '${anecdote.content}'`})
    updateAnecdoteMutation.mutate(updatedAnecdote)
  }

  const result = useQuery({
    queryKey: ['anecdotes'],
    queryFn: getAnecdotes
  })
  console.log(JSON.parse(JSON.stringify(result)))

  if (result.isLoading) {
    return (<div>loading data...</div>)
  } 

  if (result.isError) {
    return (<div>anecdote service not available due to problems in the server</div>)
  }

  const anecdotes = result.data

  return (
    <div>
      <h3>Anecdote app</h3>
    
      {anecdotes.map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={() => handleVote(anecdote)}>vote</button>
          </div>
        </div>
      )}

      <AnecdoteForm />
      <Notification />
    </div>
  )
}

export default App
