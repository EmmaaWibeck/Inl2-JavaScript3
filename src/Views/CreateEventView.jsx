import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addEvent } from '../store/actions/eventsAction'
import { useNavigate } from 'react-router-dom'

const CreateEventView = () => {

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const loading = useSelector(state => state.events.loading)
  const [addedEvent, setAddedEvent] = useState(false)
  const [formData, setFormData] = useState({
    title: '',
    date: '',
    time: '',
    body: ''
  })
  const [validation, setValidation] = useState(true)

  const onChange = e => {
    setFormData(state => ({
      ...state, 
      [e.target.name]: e.target.value
    }))
  }

  const validateTrue = () => {
    dispatch(addEvent(formData))
    setValidation(true)
    setAddedEvent(true)
  }

  const validateFalse = () => {
      setValidation(false)
      setAddedEvent(false)
  }


  const handleSubmit = (e) => {
    e.preventDefault()

      if(formData.title.trim() === '' | formData.time.trim() === '' | formData.date.trim() === '' | formData.body.trim() === '' ) {
        validateFalse()
      } else {
        validateTrue()
      }
  }

  useEffect(() => {
    if(!loading && addedEvent) {
      navigate('/')
    }

  }, [loading, addedEvent, navigate])

  return (
    <div className='create-event'>
      <h1>Create new Event</h1>
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <label htmlFor="title" className='input-label'> <p className='headlineCreate'>Title *</p> </label>
          <input type="text" name='title' className='form-control title' id='title' value={formData.title} onChange={onChange}/>
        </div>
        <div className="input-group">
            <label htmlFor="date" className='input-label'><p className='headlineCreate'> Date *</p></label>
            <input type="date" name='date' className='form-control date' id='date' value={formData.date} onChange={onChange}></input>
          </div>
          <div className="input-group">
            <label htmlFor="time" className='input-label'><p className='headlineCreate'> Time * </p></label>
            <input type="time" name='time' className='form-control time' id='time' value={formData.time} onChange={onChange}></input>
            <p></p>
          </div>
          <div className="input-group">
            <label htmlFor="body" className='input-label'><p className='headlineCreate'> Information *</p></label>
            <textarea name="body" className='form-control' cols="30" rows="10" value={formData.body} onChange={onChange} placeholder='please enter some text...'></textarea>
          </div>
            {!validation && <p className='failure mb-1'>Check your title, date, time and information input, they can not be empty.</p>}
            <button className='btn'>{ loading ? 'Loading...' : 'Add Event'}</button>
      </form>
    </div>
  )
}

export default CreateEventView