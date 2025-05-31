import React, { useEffect, useState } from 'react'
import '../App.css'
import { NavLink } from 'react-router-dom'
import axios from '../utils/axios'
import noimage from '/no-image.jpg'

const Topnav = ({ handletoggleBtn }) => {
  const [query, setquery] = useState("")
  const [searhes, setsearhes] = useState([])

  const Getsearches = async () => {
    try {
      const { data } = await axios.get(`/search/multi?api_key=${import.meta.env.VITE_API_KEY}&query=${query}`);
      setsearhes(data.results);
    } catch (error) {
      console.log('Error', error)
    }
  }

  useEffect(() => {
    if (query.length > 0) {
      Getsearches()
    } else {
      setsearhes([])
    }
  }, [query])

  return (
    <>
      <div className="search-bar">
        <i className="ri-search-line"></i>
        <input
          type="text"
          placeholder="Search Anything...."
          value={query}
          onChange={(e) => setquery(e.target.value)}
        />
        {query.length > 0 && (
          <i onClick={() => setquery("")} className="ri-close-fill close-icc"></i>
        )}

        {query.length > 0 && (
          <div className="search-results">
            {searhes.length > 0 ? (
              searhes.map((s, i) => (
                <NavLink to={`/${s.media_type}/details/${s.id}`} key={i}>
                  <img
                    src={
                      s.backdrop_path || s.profile_path
                        ? `https://image.tmdb.org/t/p/original/${s.backdrop_path || s.profile_path}`
                        : noimage
                    }
                    alt=""
                  />
                  <span>
                    {s.name ||
                      s.title ||
                      s.original_title ||
                      s.original_name}
                  </span>
                </NavLink>
              ))
            ) : (
              <p className="no-results">No results found.</p>
            )}
          </div>
        )}
      </div>

      <div className="nav-bar" onClick={handletoggleBtn}>
        <i className="ri-menu-2-fill"></i>
      </div>
    </>
  )
}

export default Topnav
































// import React, { useEffect, useState } from 'react'
// import '../App.css'
// import { NavLink } from 'react-router-dom'
// import axios from '../utils/axios'
// import noimage from '/no-image.jpg'


// const Topnav = ({handletoggleBtn}) => {


//   const [query, setquery] = useState("")
//   const [searhes, setsearhes] = useState([])
//   const Getsearches = async ()=>{
//     try {
//       const { data } = await axios.get(`/search/multi?api_key=8a2ece987925623040e82833f5ad33ea&query=${query}`);
//       console.log(data.results)
//       setsearhes(data.results);
//     } catch (error) {
//       console.log('Error' , error)
//     }
//   }
  
//   useEffect(() => {
//        Getsearches()
//     } ,[query])


   

//   return <>
//     <div className="search-bar ">

   

//      <i className="ri-search-line"></i>
//      <input type="text" placeholder='Search Anything....' value={query} onChange={(e)=>setquery(e.target.value)} />
//      {query.length > 0 && (
//        <i  onClick={() => setquery("")} className="ri-close-fill close-icc"></i>)}

//      {
//       query.length > 0 &&(
//         <div className="search-results">
//         {searhes.map((s , i)=>{
//         return  <NavLink to={`/${s.media_type}/details/${s.id}`} key={i}>
//          <img src={s.backdrop_path || s.profile_path ? `https://image.tmdb.org/t/p/original/${s.backdrop_path || s.profile_path}`: noimage } alt="" />
//            <span>{
//             s.name ||
//             s.title||
//             s.original_title ||
//             s.original_name}</span>
//          </NavLink>
//         })  
//         }           
//        </div>
//       ) 
//      }
//     </div>
//     <div className="nav-bar" onClick={handletoggleBtn} >
//           <i className="ri-menu-2-fill" ></i>
//      </div>
//   </>
// }

// export default Topnav