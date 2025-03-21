import { useMessageValue } from "../Context"
import { useMessageDispatch } from "../Context"

const Notification = () => {
  const message = useMessageValue()

  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1,
    marginBottom: 5
  }

  const dispatch = useMessageDispatch()

  const timeout = () => {
    setTimeout(() => {
      dispatch({ type: 'CLEAR'})
    }, 5000)
  }

  return (
    <div>
      {message && <div style={style}>
        {message}
        {timeout()}
        </div>}
    </div>
  )
}

export default Notification
