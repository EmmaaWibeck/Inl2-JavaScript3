import React from 'react'
import { Link } from 'react-router-dom'

const Event = ({ event }) => {
  return (
      <Link className='event' to={`/events/${event.id}`}>
        <div className="d-flex tdt">
          <h2>{event.title}</h2>
          <div className="dateAndTime d-flex">
            <p className='pr-1'>{event.date}</p>
            <p>{event.time}</p>
          </div>
        </div>
      </Link>
  ) 
}

export default Event