import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {

  return (
    <nav className='navbar'>
      <div className="container">
        <Link to="/" className='navbar-brand' >MyEvents.se</Link>

        <ul className='nav-links'>
            <li><NavLink to="/" className="nav-link" >Your Events</NavLink></li>
            <li><NavLink to="/create" className="nav-link" >Create Event</NavLink></li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar