import React, { useEffect, useState } from 'react'
import '../../app.css'
import './trending.css'
import { data, useNavigate } from 'react-router-dom'
import Topnav from '../../Templates/Topnav';
import DropDown from '../../Templates/DropDown';
import axios from 'axios';
import TrendingCards from '../../Templates/TrendingCards';
import InfiniteScroll from 'react-infinite-scroll-component';
import Loading from '../../Templates/Loading';

const Trending = () => {

  const navigate = useNavigate()
  const [category, setcategory] = useState('all')
  const [duration, setduration] = useState('day')
  const [trending, settrending] = useState([])
  const [page, setpage] = useState(1)
  const [hasmore, sethasmore] = useState(true)
    document.title = 'FlixNow | Trending'
console.log('API KEY:', import.meta.env.VITE_API_KEY);
  const Gettrending = async () => {
    try {
      const categoryLower = category.toLowerCase()
      const durationLower = duration.toLowerCase()
      const nextPage = page + 1;
      // const apiKey = import.meta.env.VITE_API_KEY;
      const { data } = await axios.get(`https://api.themoviedb.org/3/trending/${categoryLower}/${durationLower}?api_key=${import.meta.env.VITE_API_KEY}&page=${nextPage}`);

      if(data.results.length > 0){
        settrending((prevstate)=> [...prevstate , ...data.results] )
        setpage( nextPage)
      }else{
        sethasmore(false)
      }

    } catch (error) {
      console.log('api Error', error)
    }
  }


  useEffect(() => {
    settrending([]);
    setpage(1);
    Gettrending();
  }, [category, duration])

  return trending.length > 0  ? (
    <section className="Trending ">
      <div className="trending-top flex">
        <h1 className='card-head'>
          <i className="ri-arrow-left-line" onClick={() => navigate(-1)}></i>
          Trending
        </h1>

        <div className="drop-down">
          <DropDown title="category" optionstit={['Tv', 'Movie', 'all']}
             cate={(e) => setcategory(e.target.value)} />
          <DropDown title="duration" optionstit={['Week', 'Day']}
             cate={(e) => setduration(e.target.value)} />
        </div>
      </div>


      <section className='trending-cards'>
      <InfiniteScroll dataLength={trending.length} next={Gettrending} hasMore={hasmore} loader={<h1>...loading</h1>}>
          <TrendingCards  data={trending} title={category} />
      </InfiniteScroll>
      {/* <TrendingCards c data={trending} title={category} /> */}
      </section>

    </section>

  ) : (
   <Loading/>
  )
}

export default Trending