import { NavLink, Outlet } from 'react-router-dom';
import '../Components/HomePage/Home.css'
const Header = ({data}) => {
    if (!data) return null;
  return <>
  <Outlet/>
   <div className="header-wallpaper" style={{
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.8)), url(https://image.tmdb.org/t/p/original/${data.backdrop_path || data.profile_path})`,

  }}
>
     <div className="wallpaper-content">
        <h1>
            {
              data.name ||
              data.title||
              data.original_title ||
              data.original_name
            }
        </h1>
        <p className='overview'>{data.overview.slice(0 ,150)}...<NavLink to={`/${data.media_type}/details/${data.id}`}>More</NavLink></p>
        <p className='media-icons'>
          <i className="ri-megaphone-fill" ></i> {data.release_date || "NO INFO"}
          <i className="ri-album-fill" style={{marginLeft :'15px' , paddingRight :'3px'}}></i>{data.media_type}
        </p>
        <NavLink to={`/${data.media_type}/details/${data.id}/trailer`} className="wallpaper-btn">
         <i class="ri-play-fill"></i> 
            Watch Trailer
        </NavLink>
     </div>
   </div>
  </>
}

export default Header