import { useDispatch } from 'react-redux'
import { filterHandler } from '../reducers/filterReducer'

const VisibilityFilter = (props) => {
  const dispatch = useDispatch()

  const handleChange = (event) => {
    event.preventDefault()
    const newFilter = event.target.value
    dispatch(filterHandler(newFilter))
  }
  const style = {
    marginBottom: 10
  }
  
  return (
    <div style={style}>
      filter <input name='filter' onChange={handleChange} />
    </div>
  )
}
  
export default VisibilityFilter