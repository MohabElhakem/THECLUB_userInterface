import axios from 'axios';


const instance = axios.create({

    baseURL: import.meta.env.VITE_BASE_URL || 'http://localhost:3000',
    withCredentials: true, // to send cookies with requests

})

instance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response?.status === 401) {
      window.location.href = "/user/login";
    }
    return Promise.reject(error);
  }
);

export default instance;