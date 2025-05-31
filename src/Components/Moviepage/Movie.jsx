import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import DropDown from "../../Templates/DropDown"
import InfiniteScroll from "react-infinite-scroll-component"
import TrendingCards from "../../Templates/TrendingCards"
import Loading from "../../Templates/Loading"

function Movie() {


    const navigate = useNavigate()
    const [category, setcategory] = useState('now_playing')
    const [movie, setmovie] = useState([])
    const [page, setpage] = useState(1)
    const [hasmore, sethasmore] = useState(true)
    document.title = 'FlixNow | Popular'

    const Getmovie = async () => {
        try {
            // const categoryLower = category.toLowerCase()
            const nextPage = page + 1;
            const { data } = await axios.get(`https://api.themoviedb.org/3/movie/${category}?api_key=${import.meta.env.VITE_API_KEY}&page=${nextPage}`);

            if (data.results.length > 0) {
                setmovie((prevstate) => [...prevstate, ...data.results])
                setpage(nextPage)
            } else {
                sethasmore(false)
            }

        } catch (error) {
            console.log('api Error', error)
        }
    }


    useEffect(() => {
        setmovie([]);
        setpage(1);
        Getmovie();
    }, [category])


    return movie.length > 0 ? (
        <section className="Trending ">
            <div className="trending-top flex">
                <h1 className='card-head'>
                    <i className="ri-arrow-left-line" onClick={() => navigate(-1)}></i>
                    Movie<small className="small-tag"> ( {category} )</small> 
                </h1>

                <div className="drop-down">
                    <DropDown title="category" optionstit={["popular" , "top_rated" , "upcoming" , "now_playing"]}
                        cate={(e) => setcategory(e.target.value)} />
                </div>
            </div>


            <section className='trending-cards'>
                <InfiniteScroll dataLength={movie.length} next={Getmovie} hasMore={hasmore} loader={<h1>...loading</h1>}>
                    <TrendingCards data={movie} title="movie" />
                </InfiniteScroll>
                {/* <TrendingCards c data={trending} title={category} /> */}
            </section>

        </section>

    ) : (
        <Loading/>
    )

}

export default Movie