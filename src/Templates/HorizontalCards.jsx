import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import DropDown from './DropDown'
import npimage from "/no-image.jpg"


 const HorizontalCards = ({data = []}) => {
  return (
   
    <div className='Horizontal-card'>

     
        <div className="card-items">
            {
             data.length > 0 ? data.map((d , i)=>{
                 return <NavLink to={`/${d.media_type}/details/${d.id}`} className="movie-card" key={i}>
                 <div className="poster-img">
                 <img src={d.backdrop_path || d.poster_path ? `https://image.tmdb.org/t/p/original/${d.backdrop_path || d.poster_path}` : npimage} alt="poster/Image" />
                 </div>
                  <h1>{
                    ( d.name ||
                     d.title||
                     d.original_title ||
                     d.original_name)?.slice(0,15)
                   
                    }...</h1>
                     <p >{d.overview.slice(0 ,55)}...<NavLink to={`/${d.media_type}/details/${d.id}`} >More</NavLink></p>
                </NavLink>
             }):
           <h1 className='nt'>Nothing To Show</h1> }
        </div>
    </div>
  )
}

export default HorizontalCards