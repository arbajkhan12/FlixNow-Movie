import axios from "axios";
const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3/",
    headers: {

        accept: "application/json",
        
        Authorization:
         "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4YTJlY2U5ODc5MjU2MjMwNDBlODI4MzNmNWFkMzNlYSIsIm5iZiI6MTc0MTU5ODkzMi4wODksInN1YiI6IjY3Y2ViMGQ0NjY3NmU5OTQwMDEwZDgwNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.YSpIJMK-Pd7oZpKHnggs_f8KaJ0wQPnnXwcG0JFSzeo"

    }
})

export default instance

// 8a2ece987925623040e82833f5ad33ea