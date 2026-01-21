import axios from 'axios';


const instance = axios.create({

    baseURL: import.meta.env.VITE_BASE_URL || 'http://localhost:3000',
    withCredentials: true, // to send cookies with requests

})

export default instance;