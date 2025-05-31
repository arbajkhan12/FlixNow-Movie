export { removeperson } from "../reducers/PersonSlice";  
import axios from "../../utils/axios";
import { loadperson } from "../reducers/PersonSlice";
// import { loadperson } from "../reducers/personSlice"

export const asyncloadperson = (id) => async (dispatch, getState) => {   
    try {
    const detail = await axios.get(`/person/${id}?api_key=${import.meta.env.VITE_API_KEY}`);
    const externalid = await axios.get(`/person/${id}/external_ids?api_key=${import.meta.env.VITE_API_KEY}`);
    const combinedCredits = await axios.get(`/person/${id}/combined_credits?api_key=${import.meta.env.VITE_API_KEY}`);
    const tvCredits = await axios.get(`/person/${id}/tv_credits?api_key=${import.meta.env.VITE_API_KEY}`);
    const movieCredits = await axios.get(`/person/${id}/movie_credits?api_key=${import.meta.env.VITE_API_KEY}`);
    
 
 
    
    let theultimatesdetails = {
        detail: detail.data,
        externalid: externalid.data,
        combinedCredits:combinedCredits.data,
        tvCredits:tvCredits.data,
        movieCredits:movieCredits.data,
    };

    console.log(theultimatesdetails);
    dispatch(loadperson(theultimatesdetails));

  } catch (error) {
    console.log("Error", error);
  }
};
















// export {removeperson }  from "../reducers/personSliceSlice";
// import { useDispatch } from "react-redux";
// import axios from "../../utils/axios";
// import { loadperson } from "../reducers/personSliceSlice";


// export const  asyncloadperson = async(id) => (dispatch , getState) => {
//   try {
//     const detail = await axios.get(`/person/${id}`);
//     const externalid = await  axios.get(`/person/${id}/external_ids`);
//     const recommendations = await axios.get(`/person/${id}/recommendations`);
//     const similar = await axios.get(`/person/${id}/similar`);
//     const videos = await axios.get(`/person/${id}/videos`);
//     const watchproviders = await axios.get(`/person/${id}/watchproviders`);
    
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