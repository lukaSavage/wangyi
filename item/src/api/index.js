// 引入拦截器
import ajax from './ajax'

export const reqCateLists = ()=>ajax.get('/api/cateLists')