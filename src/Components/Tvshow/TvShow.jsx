import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import DropDown from "../../Templates/DropDown"
import InfiniteScroll from "react-infinite-scroll-component"
import TrendingCards from "../../Templates/TrendingCards"

const TvShow = () => {


    const navigate = useNavigate()
    const [category, setcategory] = useState('airing_today')
    const [tv, settv] = useState([])
    const [page, setpage] = useState(1)
    const [hasmore, sethasmore] = useState(true)
    document.title = 'FlixNow | Popular'

    const Gettvshow = async () => {
        try {

            const nextPage = page + 1;
            const { data } = await axios.get(`https://api.themoviedb.org/3/tv/${category}?api_key=${import.meta.env.VITE_API_KEY}&page=${nextPage}`);

            if (data.results.length > 0) {
                settv((prevstate) => [...prevstate, ...data.results])
                setpage(nextPage)
            } else {
                sethasmore(false)
            }

        } catch (error) {
            console.log('api Error', error)
        }
    }


    useEffect(() => {
        settv([]);
        setpage(1);
        Gettvshow();
    }, [category])

    return tv.length > 0 ? (
        <section className="Trending ">
            <div className="trending-top flex">
                <h1 className='card-head'>
                    <i className="ri-arrow-left-line" onClick={() => navigate(-1)}></i>
                    Tv Show<small className="small-tag"> ( {category} )</small>
                </h1>

                <div className="drop-down">
                    <DropDown title="category" optionstit={["on_the_air" , "popular", "top_rated",  "airing_today"]}
                        cate={(e) => setcategory(e.target.value)} />
                </div>
            </div>


            <section className='trending-cards'>
                <InfiniteScroll dataLength={tv.length} next={Gettvshow} hasMore={hasmore} loader={<h1>...loading</h1>}>
                    <TrendingCards data={tv} title='tv' />
                </InfiniteScroll>
                {/* <TrendingCards c data={trending} title={category} /> */}
            </section>

        </section>

    ) : (
        <h1>loding............</h1>
    )
}

export default TvShow