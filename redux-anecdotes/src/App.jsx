import { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import { initializeAnecdotes } from './reducers/anecdoteReducer'
import AnecdoteForm from './components/AnecdoteForm'
import AnecdoteList from './components/AnecdoteList'
import VisibilityFilter from './components/Filter'
import Notification from './components/Notification'

const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(initializeAnecdotes())
  }, [])

  return (
    <div>
      <h2>Anecdotes</h2>
      <AnecdoteList />
      <VisibilityFilter />
      <AnecdoteForm />
      <Notification />
    </div>
  )
}

export default App