import axios from 'axios'
import actiontypes from '../actiontypes'

export const getEvents = () => {
  return async dispatch => {
    dispatch(loading(true))
    try {
      const res = await axios.get('http://localhost:8080/events')
      dispatch(setEvents(res.data))
    }
    catch(err) {
      dispatch(eventsFailure(err.message))
    }
  }
}

export const addEvent = (event) => {
  return async dispatch => {
    dispatch(loading(true))
    try {
      const res = await axios.post('http://localhost:8080/events', event)
      dispatch(addToList(res.data))
    }
    catch(err) {
      dispatch(eventsFailure(err.message))
    }
  }
}

const addToList = (event) => {
  return {
    type: actiontypes().events.addNewEvent,
    payload: event
  }
}

const loading = (payload) => {
  return {
    type: actiontypes().events.loading,
    payload
  }
}

const setEvents = (events) => {
  return {
    type: actiontypes().events.setEvents,
    payload: events
  }
}

const eventsFailure = (payload) => {
  return {
    type: actiontypes().events.failure,
    payload
  }
}
