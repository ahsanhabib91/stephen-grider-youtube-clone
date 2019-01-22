import axios from "axios";

const KEY = "AIzaSyCf4KDoa9nyQnGlRF6Y9itkQ9GE6UujcUM";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    key: KEY,
    maxResults: "5",
    part: "snippet"
  }
});
