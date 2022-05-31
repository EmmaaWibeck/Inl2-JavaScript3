import React from 'react'
import { Route, Routes } from 'react-router-dom'
import CreateEventView from './CreateEventView'
import NewsView from './NewsView'
import EventDetailsView from './EventDetailsView'

const Views = () => {
  return (
    <Routes>
      <Route path='/' element={ <NewsView /> } />
      <Route path='/create' element={ <CreateEventView /> }/>
      <Route path='/events/:id' element={ <EventDetailsView /> }/>
    </Routes>
  )
}

export default Views