// 引入 axios
import axios from 'axios'
import qs from 'qs'

// 请求拦截器
axios.interceptors.request.use(
    (config)=>{
        if(config.method.toUpperCase()==='POST' && config.data instanceof Object){
            config.data = qs.stringify(config.data)
        }
        return config
    },
    (err)=>{
        //代码失败就返回一个失败的promise对象，这个可以忽略，基本不会触发
        return Promise.reject(err);
    }
)
// 响应拦截器
axios.interceptors.response.use(
    (response)=>{
        return response.data
    },
    (err)=>{
        return Promise.reject(err)
    }
)


// 暴露封装好的axios
export default axios