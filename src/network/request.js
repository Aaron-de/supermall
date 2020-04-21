import axios from 'axios';

export function request(config) {
  // 创建实例
  const instance = axios.create({
    baseURL: '',
    timeout: 3000
  })

  // 拦截器
  // 请求拦截
  instance.interceptors.request.use(config => {
    return config;
  }, err => {

  })
  // 响应拦截
  instance.interceptors.response.use(response => {
    return response.data
  }, err => {
    
  })

  // 发送真正网络请求
  return instance(config);
}