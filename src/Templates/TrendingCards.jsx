// import React from 'react'
// import { NavLink } from 'react-router-dom'

// import noimage from '/no-image.jpg'


// const TrendingCards = ({data , title}) => {
//   return (
//     <div className='cards flex'>
//         {
//           data.map((c, i)=>{
//             return <NavLink to={`/${data.media_type || title}/details/${c.id}`} key={i}>
                
//               <img src={c.poster_path || c.backdrop_path || c.profile_path ? `https://image.tmdb.org/t/p/original/${c.poster_path || c.backdrop_path || c.profile_path }`: noimage} alt="Card/Image" />
//               <h1>
//                 {
//                   ( c.name ||
//                     c.title||
//                     c.original_title ||
//                     c.original_name)?.slice(0,15)
//                 }
//               </h1>
//               {/* <div className='vote-item'>{(c.vote_average * 10).toFixed() }<sup> %</sup></div> */}
//             </NavLink>
//           })  
//         }
//     </div>
//   )
// }

// export default TrendingCards

import React from 'react'
import { NavLink } from 'react-router-dom'
import noimage from '/no-image.jpg'

const TrendingCards = ({ data, title }) => {
  return (
    <div className='cards flex'>
      {
        data.map((c, i) => {
          const mediaType = c.media_type || title.toLowerCase(); // fallback to prop title
          return (
            <NavLink to={`/${mediaType}/details/${c.id}`} key={i}>
              <img
                src={
                  c.poster_path || c.backdrop_path || c.profile_path
                    ? `https://image.tmdb.org/t/p/original/${c.poster_path || c.backdrop_path || c.profile_path}`
                    : noimage
                }
                alt="Card/Image"
              />
              <h1>
                {
                  (c.name ||
                    c.title ||
                    c.original_title ||
                    c.original_name)?.slice(0, 15)
                }
              </h1>
            </NavLink>
          );
        })
      }
    </div>
  );
};

export default TrendingCards;
