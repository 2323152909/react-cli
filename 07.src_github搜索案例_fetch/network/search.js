import { request2 } from './index.js'

export function search(params){
  return request2({
    url:'/search/users',
    method:'get',
    params:params
  })
}

// 获取本地模拟数据
export function search2(params){
  return request2({
    url:'/search/users2',
    method:'get',
    params:params
  })
}