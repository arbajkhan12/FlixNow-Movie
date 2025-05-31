import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, Outlet, useLocation, useNavigate, useParams } from 'react-router-dom';
import { asyncloadperson, removeperson } from '../../Store/actions/PersonAction';

import '../../App.css';
import '../HomePage/Home.css';
import HorizontalCards from '../../Templates/HorizontalCards';
import DropDown from '../../Templates/DropDown';
import Loading from '../../Templates/Loading';



const PersonDetails = () => {

  const { pathname } = useLocation();
  const navigate = useNavigate();
  const { info } = useSelector((state) => state.person);
  const { id } = useParams();
  const dispatch = useDispatch();

  const [category, setcategory] = useState("Movie")
  useEffect(() => {
    dispatch(asyncloadperson(id));
    return () => {
      dispatch(removeperson());
    };
  }, [id]);
  return info ? (
    <div className="person">
      <div className='detailspagedata flex'>

        <nav className="dataNav">
          <NavLink className="ri-arrow-left-line" onClick={() => navigate(-1)} />

        </nav>

        <div className='poster-details person-posters '>
          <div className="poster-img poster-left ">
            <img
              src={`https://image.tmdb.org/t/p/original/${info?.detail?.profile_path
                }`}
              alt="TV Poster"
            />
            <hr className="hr-rule rules" />
            <NavLink
              className='remixicon'
              target="_blank"
              to={`https://wikidata.org/wiki/${info?.externalid?.wikidata_id}`}
            >
              <i className="ri-earth-fill"></i>
            </NavLink>

            <NavLink
              className='remixicon'
              target="_blank"
              to={`https://www.facebook.com/${info?.externalid?.facebook_id}`}
            >
              <i class="ri-facebook-circle-fill"></i>
            </NavLink>

            <NavLink
              className='remixicon'
              target="_blank"
              to={`https://www.instagram.com/${info?.externalid?.instagram_id}`}
            >
              <i class="ri-instagram-line"></i>
            </NavLink>

            <NavLink
              className='remixicon'
              target="_blank"
              to={`https://www.twitter.com/${info?.externalid?.twitter_id}`}
            >
              <i class="ri-twitter-x-line"></i>
            </NavLink>

            <h1 className='info-person'>Person Info</h1>
            <h1 className='person-dt'>Known For
              <h1 className='person-ab'>{info.detail.known_for_department}</h1>
            </h1>

            <h1 className='person-dt'>Gender
              <h1 className='person-ab'>{info.detail.gender === 2 ? 'Male' : 'female'}</h1>
            </h1>

            <h1 className='person-dt'>Birthday
              <h1 className='person-ab'>{info.detail.birthday}</h1>
            </h1>

            <h1 className='person-dt'>Deathday
              <h1 className='person-ab'>{info.detail.deathday ? info.detail.deathday : "Still Alive"}</h1>
            </h1>

            <h1 className='person-dt'>Place Of Birth
              <h1 className='person-ab'>{info.detail.place_of_birth}</h1>
            </h1>

            <h1 className='person-dt'>Also Knows As
              <h1 className='person-ab'>{info.detail.
                also_known_as.join(' , ')
              }</h1>
            </h1>
          </div>


          <div className=' poster-right-info'>

            <h1 className='person-name'>{info.detail.name}</h1>
            <h1 className='person-dt'>Biography</h1>
            <p className='bio'>{info.detail.biography}</p>

            <h1 className='person-dt role'>Best known Roles</h1>
            <HorizontalCards data={info.combinedCredits.cast} />

            <div className="class flex">
              <h1 className='person-dt'>acting</h1>
              <DropDown title="category"
                optionstit={['Tv', 'Movie',]}
                cate={(e) => setcategory(e.target.value)} />
            </div>
            <div className='acting-details'>
              {info?.combinedCredits?.cast ? (
                info.combinedCredits.cast
                  .filter((c) => c.media_type === (category === "Tv" ? "tv" : "movie"))
                  .map((c, i) => (
                    <li key={i}>
                      <NavLink to={`/${category}/details/${c.id}`}>
                        <span>{c.title || c.name ||   c.original_title || c.original_name || "Untitled"}</span>
                        <span className='block'>{c.character && `Character Name : ${c.character}`}</span>
                      </NavLink>
                    </li>
                  ))
              ) : (
                <p>No data for this category.</p>
              )}
            </div>
          </div>

        </div>

      </div>
    </div>
  ) :<Loading/>
}

export default PersonDetails