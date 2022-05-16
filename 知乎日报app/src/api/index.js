import axios from "axios";

const request = axios.create({
  baseURL: '/api',
  timeout: 5000
})

// 获取首页数据
export const reqGetstories = () => request({
  url: `/api/3/stories/latest`,
  method: 'get'
})

// 获取详情页
export const reqGetDetail = () => request({
  url: `/api/3/news/3977867`,
  method: 'get'
})
