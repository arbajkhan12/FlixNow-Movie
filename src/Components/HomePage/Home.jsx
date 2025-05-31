import SideNav from '../../Templates/SideNav'
import '../../App.css';
import './Home.css'
import Topnav from '../../Templates/Topnav';
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Header from '../../Templates/Header';
import HorizontalCards from '../../Templates/HorizontalCards';
import DropDown from '../../Templates/DropDown';
import Loading from '../../Templates/Loading';
// import axios from '../utils/axios'

const Home = () => {

  const [trending, settrending] = useState(null)
  const [wallpaper, setwallpaper] = useState(null)
  const [category, setcategory] = useState('all')
  const [toggle, settoggle] = useState(false);

  document.title = 'FlixNow | Home'

  const Getwallpaper = async () => {
    try {
      const { data } = await axios.get(`https://api.themoviedb.org/3/trending/all/day?api_key=${import.meta.env.VITE_API_KEY}`);
      let random = data.results[(Math.random() * data.results.length).toFixed()]
      setwallpaper(random);
    } catch (error) {
      console.log('api Error', error)
    }
  }

  const Gettrending = async () => {
    try {
      const categoryLower = category.toLowerCase()
      const { data } = await axios.get(`https://api.themoviedb.org/3/trending/${categoryLower}/day?api_key=${import.meta.env.VITE_API_KEY}`);
      settrending(data.results)
    } catch (error) {
      console.log('api Error', error)
    }
  }

  useEffect(() => {
    Gettrending()
    !wallpaper && Getwallpaper()
  }, [category , wallpaper])

    const handletoggleBtn = () => {
      settoggle(!toggle);
    };
  

  return wallpaper && trending ? (
    <>
      <div className="homepage flex">
        <SideNav toggle={toggle} />
        <div className="Right-nav">
          <Topnav handletoggleBtn={handletoggleBtn}/>
          <Header data={wallpaper} />

          <div className="card-top flex">
            <h1 className='card-head'>Trending</h1>
            <DropDown title="Filter" optionstit={['Tv', 'Movie', 'all']} cate={(e)=> setcategory(e.target.value)}/>
          </div>

          <HorizontalCards data={trending}  />
        </div>
      </div>
    </>
  ) : (
    <Loading/>
  );
}

export default Home