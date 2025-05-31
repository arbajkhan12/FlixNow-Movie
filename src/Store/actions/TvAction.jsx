export { removetv } from "../reducers/tvSlice";  
import axios from "../../utils/axios";
import { loadtv } from "../reducers/tvSlice"

export const asyncloadtv = (id) => async (dispatch, getState) => {   
    try {
    const detail = await axios.get(`/tv/${id}?api_key=${import.meta.env.VITE_API_KEY}`);
    const externalid = await axios.get(`/tv/${id}/external_ids?api_key=${import.meta.env.VITE_API_KEY}`);
    const recommendations = await axios.get(`/tv/${id}/recommendations?api_key=${import.meta.env.VITE_API_KEY}`);
    const similar = await axios.get(`/tv/${id}/similar?api_key=${import.meta.env.VITE_API_KEY}`);
    const videos = await axios.get(`/tv/${id}/videos?api_key=${import.meta.env.VITE_API_KEY}`);
    const watchproviders = await axios.get(`/tv/${id}/watch/providers?api_key=${import.meta.env.VITE_API_KEY}`);
    const  translations = await axios.get(`/tv/${id}/translations?api_key=${import.meta.env.VITE_API_KEY}`);
    
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
    dispatch(loadtv(theultimatesdetails));

  } catch (error) {
    console.log("Error", error);
  }
};
