import AnecdoteForm from './components/AnecdoteForm'
import AnecdoteList from './components/AnecdoteList'
import VisibilityFilter from './components/Filter'

const App = () => {
  return (
    <div>
      <h2>Anecdotes</h2>
      <AnecdoteList />
      <VisibilityFilter />
      <AnecdoteForm />
    </div>
  )
}

export default App