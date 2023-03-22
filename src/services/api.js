import axios from "axios";


// BASE DA URL https://api.themoviedb.org/3/
// URL da API: movie/now_playing?api_key=ecc42320fa85d4a5f555c2d00497f383

const api = axios.create({
    baseURL: "https://api.themoviedb.org/3/"
});

export default api;