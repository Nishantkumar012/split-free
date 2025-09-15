import axios from "axios";

const axiosInstance = axios.create({
    baseURL: "http://localhost:5000/api", // for backend 
})



// Interceptor: runs befroeeach request to find id from token
axiosInstance.interceptors.request.use(
    (config) =>{
          
          const token = localStorage.getItem("token"); // get token from storage

          if(token){
                
            //attach token
              config.headers.Authorization = `Bearer ${token}`;
          }

          return config;
    },

    (error) => Promise.reject(error)
)

export default axiosInstance