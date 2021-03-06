import axios from "axios";
export default (config)=>{
    const instance = axios.create({
        baseURL:'/api',
        timeout:10000
    })
   instance.interceptors.request.use(config=>{
       return config;
   },err=>{
       console.log(err);
   })
   instance.interceptors.response.use(res=>{
       return res.data
   },err=>{
       console.log(err);
   })
   return instance(config)
}