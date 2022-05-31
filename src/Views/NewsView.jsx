import { useSelector } from 'react-redux'
import Event from '../components/Event'

const NewsView = () => {

  const { data: events, loading } = useSelector(state => state.events)

  return (
    <div>
      { loading && <p>Loading...</p>}
      { events.map(event => <Event key={event.id} event={event} />) }

    </div>
    
  )
}

export default NewsView