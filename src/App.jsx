import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Components/HomePage/Home'
import './App.css'
import Trending from './Components/TrendingPage/Trending'
import Popular from './Components/PopularPage/Popular'
import Movie from './Components/Moviepage/Movie'
import TvShow from './Components/Tvshow/TvShow'
import People from './Components/People/People'
import MovieDetails from './Components/MovieDetails/MovieDetails'
import TvDetails from './Components/TvDetails/TvDetails'
import PersonDetails from './Components/PersonDetails/PersonDetails'
import Trailer from './Templates/Trailer'
import About from './Components/AboutPage/About'
import Contact from './Components/ContactPage/Contact'



const App = () => {



   return <>
      <div className="cart">
      </div>
      <div className='main-div'>

         <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/trending' element={<Trending />} />
            <Route path='/popular' element={<Popular />} />
            <Route path='/movie' element={<Movie />} />

            <Route path='/movie/details/:id' element={<MovieDetails />} > 
            <Route path='/movie/details/:id/trailer' element={<Trailer/>}/>
            </Route>
         
            <Route path='/tv' element={<TvShow />} />
            <Route path='/tv/details/:id' element={<TvDetails />}   >
              <Route path='/tv/details/:id/trailer' element={<Trailer/>}/>
          </Route>
            <Route path='/person' element={<People />} />
            <Route path='/person/details/:id' element={<PersonDetails />} />
            <Route path='/about' element={<About/>}></Route>
            <Route path='/contact' element={<Contact/>}/>
         </Routes>
        

      </div>

   </>

}

export default App