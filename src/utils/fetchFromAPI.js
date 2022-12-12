
import axios from "axios";

const BASE_URL='https://youtube-v31.p.rapidapi.com';

  const options = {
   
    params: {maxResults: '50'},
    headers: {
      'X-RapidAPI-Key': '92ad8230c0msh461f041a8a0bca4p13adf6jsnf90c981f5111',
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
  };
  export const fetchFromAPI=async(url)=>{
    const {data}=await axios.get(`${BASE_URL}/${url}`, options);  console.log(process.env.YOUTUBE_RAPID_API,process.env.path);

    return data;

  }