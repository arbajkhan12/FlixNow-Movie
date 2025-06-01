import React from 'react'
import ReactPlayer from 'react-player'
import { useSelector } from 'react-redux'
import { useLocation, useNavigate } from 'react-router-dom'
import '../App.css'
import NotFound from './NotFound'

function Trailer() {
    const navigate = useNavigate()
    const { pathname } = useLocation()
    const category = pathname.toLowerCase().includes('movie') ? "movie" : "tv"
    const ytvideo = useSelector((state) => state[category].info.videos)

    return ytvideo ? (
        <div className='Trailer-data'>
            <ReactPlayer controls width="94%" height={500} style={{background : "#000" , marginTop : "12px"}} className="palyer" url={`https://www.youtube.com/watch?v=${ytvideo.key}`} />
            <i onClick={() => navigate(-1)} class="ri-close-line"></i>
        </div>
    ): <NotFound/>
}

export default Trailer