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

  const onCreate = (event) => {
    event.preventDefault()
    const content = event.target.anecdote.value
    event.target.anecdote.value = ''
    newAnecdoteMutation.mutate(content)
    dispatch({ type: 'NEW_MESSAGE', payload: `New anecdote created: ${content}`})
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
