import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import DropDown from "../../Templates/DropDown"
import InfiniteScroll from "react-infinite-scroll-component"
import TrendingCards from "../../Templates/TrendingCards"
import Loading from "../../Templates/Loading"

const People = () => {
    
    const navigate = useNavigate()
    const [category, setcategory] = useState('popular')
    const [person, setperson] = useState([])
    const [page, setpage] = useState(1)
    const [hasmore, sethasmore] = useState(true)
    document.title = 'FlixNow | Popular'

    const GetPerson = async () => {
        try {

            const nextPage = page + 1;
            const { data } = await axios.get(`https://api.themoviedb.org/3/person/${category}?api_key=${import.meta.env.VITE_API_KEY}&page=${nextPage}`);

            if (data.results.length > 0) {
                setperson((prevstate) => [...prevstate, ...data.results])
                setpage(nextPage)
            } else {
                sethasmore(false)
            }

        } catch (error) {
            console.log('api Error', error)
        }
    }


    useEffect(() => {
        setperson([]);
        setpage(1);
        GetPerson();
    }, [category])

    return person.length > 0 ? (
        <section className="Trending ">
            <div className="trending-top flex">
                <h1 className='card-head'>
                    <i className="ri-arrow-left-line" onClick={() => navigate(-1)}></i>
                    People
                </h1>

              
            </div>


            <section className='trending-cards'>
                <InfiniteScroll dataLength={person.length} next={GetPerson} hasMore={hasmore} loader={<h1>...loading</h1>}>
                    <TrendingCards data={person} title="person"/>
                </InfiniteScroll>
                {/* <TrendingCards c data={trending} title={category} /> */}
            </section>

        </section>

    ) : (
      <Loading/>
    )
}

export default People