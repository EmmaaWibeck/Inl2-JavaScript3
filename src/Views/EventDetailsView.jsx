import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { clearEvent, getEventById } from '../store/actions/eventAction'
import { useParams } from 'react-router-dom'


const PostDetailsView = () => {

  const dispatch = useDispatch()
  const { id } = useParams()

  useEffect(() => {
    dispatch(getEventById(id))

    return () => {
      dispatch(clearEvent())
    }

  }, [dispatch, id])

  const { loading, data: event, error } = useSelector(state => state.event)

  const template = ( event && 
    <div className='card bl mt-1'>
      <h2>{event.title}</h2>
      <div className='mt-1'>
        <h3>Datum: {event.date}</h3>
        <h3>Kl: {event.time}</h3>
      </div>
      <p className='mt-1 event-info'>{event.body}</p>
    </div>
  )

  if(error)
    return (
      <div>
        <p>{error}</p>
      </div>
    )

  return (
    <div>
      {template}
      {loading && <p>Loading... </p>}
    </div>
  )
}

export default PostDetailsView