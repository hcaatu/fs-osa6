import { useMutation, useQueryClient } from "@tanstack/react-query"
import { createAnecdote } from "../requests"
import { useMessageDispatch } from "../Context"

const AnecdoteForm = () => {
  const queryClient = useQueryClient()
  const dispatch = useMessageDispatch()

  const newAnecdoteMutation = useMutation({ 
    mutationFn: createAnecdote ,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['anecdotes'] })
    }
  })

  const errorMessage = () => {
    dispatch({ type: 'NEW_MESSAGE', payload: `Anecdote must have length 5 or more`})
  }

  const successMessage = (anecdote) => {
    dispatch({ type: 'NEW_MESSAGE', payload: `New anecdote created: ${anecdote.content}`})
  }

  const onCreate = (event) => {
    event.preventDefault()
    const content = event.target.anecdote.value
    event.target.anecdote.value = ''
    newAnecdoteMutation.mutate(content, { 
      onSuccess: successMessage, 
      onError: errorMessage 
    })
  }

  return (
    <div>
      <h3>create new</h3>
      <form onSubmit={onCreate}>
        <input name='anecdote' />
        <button type="submit">create</button>
      </form>
    </div>
  )
}

export default AnecdoteForm
