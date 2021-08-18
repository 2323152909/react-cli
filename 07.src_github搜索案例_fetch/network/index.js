import axios from 'axios';

export function request1(config) {
  // 创建axios实例
  const instance = axios.create({
    baseURL: 'https://api.github.com',
    timeout: 5000,
  })

  // 请求拦截器
  instance.interceptors.request.use(req => {
    return req;
  }, error => {
    return Promise.reject(error);
  });

  // 响应拦截器
  instance.interceptors.response.use(res => {
    // Do something before request is sent
    return res;
  }, error => {
    // Do something with request error
    return Promise.reject(error);
  });

  return instance(config);
}

// 配置了代理服务器的地址
export function request2(config) {
  // 获取本地服务器端口
  // 创建axios实例
  const instance = axios.create({
    baseURL: `http://localhost:${window.location.port}/api1`,
    timeout: 5000,
  })

  // 请求拦截器
  instance.interceptors.request.use(req => {
    return req;
  }, error => {
    return Promise.reject(error);
  });

  // 响应拦截器
  instance.interceptors.response.use(res => {
    // Do something before request is sent
    return res;
  }, error => {
    // Do something with request error
    return Promise.reject(error);
  });

  return instance(config);
}