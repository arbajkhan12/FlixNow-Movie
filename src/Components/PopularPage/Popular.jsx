import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import DropDown from "../../Templates/DropDown"
import InfiniteScroll from "react-infinite-scroll-component"
import TrendingCards from "../../Templates/TrendingCards"



function Popular() {


    const navigate = useNavigate()
    const [category, setcategory] = useState('movie')
    const [popular, setpopular] = useState([])
    const [page, setpage] = useState(1)
    const [hasmore, sethasmore] = useState(true)
    document.title = 'FlixNow | Popular'

    const Getpopular = async () => {
      try {
        const categoryLower = category.toLowerCase()
        const nextPage = page + 1;
        const { data } = await axios.get(`https://api.themoviedb.org/3/${categoryLower}/popular?api_key=${import.meta.env.VITE_API_KEY}&page=${nextPage}`);
  
        if(data.results.length > 0){
          setpopular((prevstate)=> [...prevstate , ...data.results] )
          setpage( nextPage)
        }else{
          sethasmore(false)
        }
  
      } catch (error) {
        console.log('api Error', error)
      }
    }
  
  
    useEffect(() => {
      setpopular([]);
      setpage(1);
      Getpopular();
    }, [category])


    return popular.length > 0  ? (
      <section className="Trending ">
        <div className="trending-top flex">
          <h1 className='card-head'>
            <i className="ri-arrow-left-line" onClick={() => navigate(-1)}></i>
           Popular
          </h1>
  
          <div className="drop-down">
            <DropDown title="category" optionstit={['Tv', 'Movie', 'all']}
               cate={(e) => setcategory(e.target.value)} />
          </div>
        </div>
  
  
        <section className='trending-cards'>
        <InfiniteScroll dataLength={popular.length} next={Getpopular} hasMore={hasmore} loader={<h1>...loading</h1>}>
            <TrendingCards  data={popular} title={category} />
        </InfiniteScroll>
        {/* <TrendingCards c data={trending} title={category} /> */}
        </section>
  
      </section>
  
    ) : (
      <h1>loding............</h1>
    )
  }
  


export default Popular