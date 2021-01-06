import axios from "axios"
//响应拦截器
axios.interceptors.response.use(response => {
return response.data || response;
},error => {
// Do something with response error
return Promise.reject(error);
});
axios.interceptors.request.use(config => {
    //获取jwt
    let jwt=localStorage.getItem("jwt")
    if(jwt){
        config.headers={
          Authorization:jwt
        } 
    }    
return config;
},error => {
return Promise.reject(error);
});
export  {axios}