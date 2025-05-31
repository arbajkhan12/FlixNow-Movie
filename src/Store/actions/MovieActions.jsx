export { removemovie } from "../reducers/MovieSlice";  
import axios from "../../utils/axios";
import { loadmovie } from "../reducers/MovieSlice"

export const asyncloadmovie = (id) => async (dispatch, getState) => {   
    try {
    const detail = await axios.get(`/movie/${id}?api_key=${import.meta.env.VITE_API_KEY}`);
    const externalid = await axios.get(`/movie/${id}/external_ids?api_key=${import.meta.env.VITE_API_KEY}`);
    const recommendations = await axios.get(`/movie/${id}/recommendations?api_key=${import.meta.env.VITE_API_KEY}`);
    const similar = await axios.get(`/movie/${id}/similar?api_key=${import.meta.env.VITE_API_KEY}`);
    const videos = await axios.get(`/movie/${id}/videos?api_key=${import.meta.env.VITE_API_KEY}`);
    const watchproviders = await axios.get(`/movie/${id}/watch/providers?api_key=${import.meta.env.VITE_API_KEY}`);
    const  translations = await axios.get(`/movie/${id}/translations?api_key=${import.meta.env.VITE_API_KEY}`);
    
    let theultimatesdetails = {
        detail: detail.data,
        externalid: externalid.data,
        recommendations: recommendations.data,
        similar: similar.data,
        translations : translations.data.translations,
        videos: videos.data.results.find((m) => m.type === 'Trailer'),
        watchproviders: watchproviders.data.results.IN,
    };

    console.log(theultimatesdetails);
    dispatch(loadmovie(theultimatesdetails));

  } catch (error) {
    console.log("Error", error);
  }
};
















// export {removemovie }  from "../reducers/MovieSliceSlice";
// import { useDispatch } from "react-redux";
// import axios from "../../utils/axios";
// import { loadmovie } from "../reducers/MovieSliceSlice";


// export const  asyncloadmovie = async(id) => (dispatch , getState) => {
//   try {
//     const detail = await axios.get(`/movie/${id}`);
//     const externalid = await  axios.get(`/movie/${id}/external_ids`);
//     const recommendations = await axios.get(`/movie/${id}/recommendations`);
//     const similar = await axios.get(`/movie/${id}/similar`);
//     const videos = await axios.get(`/movie/${id}/videos`);
//     const watchproviders = await axios.get(`/movie/${id}/watchproviders`);
    
//     let theultimatesdetails = {
//         detail : detail.data ,
//         externalid : externalid.data ,
//         recommendations  : recommendations.data,
//         similar : similar.data,
//         videos : videos.data,
//         watchproviders : watchproviders.data ,
//     }

//     console.log(theultimatesdetails)

//   } catch (error) {
//     console.log("Error" , error)
//   }

    
// }