import axios from "axios";

const request = axios.create({
    baseURL: "https://youtube.googleapis.com/youtube/v3/",
    params: {
        key: "AIzaSyBtk8J0-M9Ny1uF50dgOrpm9nWn8vyqics",
    }
})

export default request