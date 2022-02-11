import axios from "axios";

const KEY= 'AIzaSyAohiS_54-qipH4pa8AyILzGSaMUZr-rt0';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
      part: 'snippet', 
      type: 'video',
      maxResults: 5,
      key: KEY
  }
});