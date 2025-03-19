import { useDispatch } from 'react-redux'
import { newFilter } from '../reducers/filterReducer'

const VisibilityFilter = (props) => {
  const dispatch = useDispatch()

  const handleChange = (event) => {
    event.preventDefault()
    dispatch(newFilter(event.target.value))
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