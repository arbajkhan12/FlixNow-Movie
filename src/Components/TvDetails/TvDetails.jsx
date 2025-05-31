import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, Outlet, useLocation, useNavigate, useParams } from 'react-router-dom';
import { asyncloadtv } from '/src/Store/actions/TvAction.jsx';

import '../../App.css';
import '../HomePage/Home.css';
import HorizontalCards from '../../Templates/HorizontalCards';
import { removetv } from '../../Store/reducers/tvSlice';
import Loading from '../../Templates/Loading';

const TvDetails = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const { info } = useSelector((state) => state.tv);
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncloadtv(id));
    return () => {
      dispatch(removetv());
    };
  }, [id]);

  return info ? (
    <>
    <Outlet/>  
 
      <section
        className="detailspagedata"
        style={{
          backgroundImage: info?.detail?.backdrop_path
            ? `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.8)), url(https://image.tmdb.org/t/p/original/${info.detail.backdrop_path})`
            : 'none',
        }}
      >
        <nav className="dataNav">
          <NavLink className="ri-arrow-left-line" onClick={() => navigate(-1)} />
          <NavLink target="_blank" to={info?.detail?.homepage}>
            <i className="ri-external-link-line"></i>
          </NavLink>
          <NavLink
            target="_blank"
            to={`https://wikidata.org/wiki/${info?.externalid?.wikidata_id}`}
          >
            <i className="ri-earth-fill"></i>
          </NavLink>
          <NavLink
            target="_blank"
            to={`https://www.imdb.com/title/${info?.externalid?.imdb_id}`}
          >
            IMDb
          </NavLink>
        </nav>

        <div className="poster_details">
          <div className="poster-inside">
            <div className="poster-left">
              <img
                src={`https://image.tmdb.org/t/p/original/${
                  info?.detail?.poster_path || info?.detail?.backdrop_path
                }`}
                alt="TV Poster"
              />
              <div className="rent_and_details">
                {info?.watchproviders?.flatrate && (
                  <div className="rental flatrate_section">
                    <h3>Available on Platforms</h3>
                    {info.watchproviders.flatrate.map((w, index) => (
                      <img
                        title={w.provider_name}
                        key={index}
                        className="loga_path_img"
                        src={`https://image.tmdb.org/t/p/original/${w.logo_path}`}
                        alt="Platform Provider"
                      />
                    ))}
                  </div>
                )}

                {info?.watchproviders?.rent && (
                  <div className="rental rent_section">
                    <h3>Available on Rent</h3>
                    {info.watchproviders.rent.map((w, index) => (
                      <img
                        title={w.provider_name}
                        key={index}
                        className="loga_path_img"
                        src={`https://image.tmdb.org/t/p/original/${w.logo_path}`}
                        alt="Rent Provider"
                      />
                    ))}
                  </div>
                )}

                {info?.watchproviders?.buy && (
                  <div className="rental buy_section">
                    <h3>Available on Buy</h3>
                    {info.watchproviders.buy.map((w, index) => (
                      <img
                        title={w.provider_name}
                        key={index}
                        className="loga_path_img"
                        src={`https://image.tmdb.org/t/p/original/${w.logo_path}`}
                        alt="Buy Provider"
                      />
                    ))}
                  </div>
                )}
              </div>
            </div>

            <div className="poster-right">
              <h1>
                {(
                  info?.detail?.name ||
                  info?.detail?.title ||
                  info?.detail?.original_title ||
                  info?.detail?.original_name
                )?.slice(0, 30)}
                <small className="small-tag">
                  ({info?.detail?.first_air_date?.split('-')[0]})
                </small>
              </h1>

              <div className="votes">
                <p className="vote-item">
                  {(info?.detail?.vote_average * 10).toFixed()}<sup>%</sup>
                </p>
                <h1>User Score</h1>
                <h1 className="date">
                  <span>Release Date:</span> {info?.detail?.first_air_date}
                </h1>
              </div>

              <div className="genras common-div">
                <h1>
                  <span>Genres:</span>{' '}
                  {info?.detail?.genres?.map((g) => g.name).join(', ')}
                </h1>
              </div>

              <div className="tagline genras common-div">
                <h1>
                  <span>Tagline:</span> {info?.detail?.tagline}
                </h1>
              </div>

              <div className="tagline genras common-div">
                <h1>
                  <span>Overview:</span> {info?.detail?.overview}
                </h1>
              </div>

              <div className="translated genras common-div">
                <h1>
                  <span>TV Translations:</span>{' '}
                  {info?.translations?.map((t) => t.name).join(', ')}
                </h1>
              </div>

              <NavLink to={`${pathname}/trailer`} className="wallpaper-btn">
                <i className="ri-play-fill"></i>
                Watch Trailer
              </NavLink>
            </div>
          </div>
        </div>

        <h1 className='rec'>Seasons</h1>
      <div className='seasons-name'>
  
       {
        info.detail.seasons.length > 0 ?  info.detail.seasons.map((s,i)=>( 
            <div>
            <img src={`https://image.tmdb.org/t/p/original/${s.poster_path}`} alt="poster/Image" />
            <h1>{
                info.detail.name ||
                s.title||
                s.original_name ||
                s.original_title
                }
               </h1>
           </div>
          )): <h1>there is No Seasons</h1>
        
        }
    
      </div>



        <hr className="hr-rule" />
        <h1 className='rec'>Recommendations & Similar stuff</h1>
        <HorizontalCards
        
          data={
            Array.isArray(info?.recommendations?.results) &&
            info.recommendations.results.length > 0
              ? info.recommendations.results
              : Array.isArray(info?.similar?.results)
              ? info.similar.results
              : []
          }
        />
      </section>
    </>
  ) : (
   <Loading/>
  );
};

export default TvDetails;
