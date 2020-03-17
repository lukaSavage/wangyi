import axios from 'axios'
import qs from 'qs'

//定义请求拦截器
axios.interceptors.request.use(
    (config) => {
        if (config.method.toUpperCase() === 'POST' && config.data instanceof Object) {
            config.data = qs.stringify(config.data)
        }
        return config
    },
    (err) => {
        return Promise.reject(err)
    }
)

// 定义响应拦截器
axios.interceptors.response.use(
    (response) => {
        return response.data
    },
    (err) => {
        return Promise.reject(err)
    }
)

export default axios