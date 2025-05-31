
import React from 'react';

import "../../App.css"
import { NavLink, useNavigate } from 'react-router-dom';

const About = () => {
    const navigate = useNavigate();
    return (
        <div>
            <nav className="dataNav data-icons">
                <NavLink className="ri-arrow-left-line" onClick={() => navigate(-1)} />
            </nav>

            <div className="about-banner">
                <h1>About Flixnow</h1>
            </div>

            <div className="about-container">
                <div className="about-section">
                    <h2>What is MovieApp?</h2>
                    <p>
                        MovieApp is a community-built movie and TV discovery platform powered by The Movie Database (TMDB) API.
                        We provide trailers, overviews, ratings, and more—all in one place.
                    </p>
                    <p>
                        Designed with a modern and intuitive UI, MovieApp allows users to explore thousands of movies and TV shows from around the world.
                    </p>
                    <p>
                        This app is not affiliated with TMDB but utilizes its public API to fetch and display up-to-date movie data.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default About;
