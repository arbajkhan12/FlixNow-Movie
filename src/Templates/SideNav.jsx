import { NavLink } from 'react-router-dom'
import '../App.css'

const SideNav = ({toggle}) => {
  return (
    <div  className={`Leftnav ${toggle ?  "active" : ""}`}>
      <h1>
        <NavLink><i className='ri-tv-fill icon'></i>FlixNow </NavLink>
      </h1>
      <nav className='nav'>
        <h2>New Feeds</h2>

       <div className="links flex-col">
         <NavLink to="/trending"><i className="ri-fire-fill"></i>Trending</NavLink>
         <NavLink to="/popular"><i className="ri-bard-fill"></i>Popular</NavLink>
         <NavLink to="/movie"><i className="ri-movie-2-fill"></i>Movies</NavLink>
         <NavLink to="/tv"><i className="ri-tv-2-fill"></i>Tv Shows</NavLink>
         <NavLink to="/person"><i className="ri-group-fill"></i>People</NavLink>
       </div>
      </nav>
      <hr />
      <nav className='nav-info flex-col'>
        <h1>Website Information</h1>
        <NavLink to='/About'><i className="ri-information-fill"></i>About Us</NavLink>
        <NavLink to='/Contact'><i className="ri-phone-fill"></i>Contact Us</NavLink>

      </nav>
    </div>
  )
}

export default SideNav