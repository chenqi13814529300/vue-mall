import { request } from "@/network/request";

const getHomeMultidata = () => {
  return request({
    url: '/home/multidata'
  })
}

const getHomeGoods = (type, page) => {
  return request({
    url: '/home/data',
    params: {
      type,
      page
    }
  })
}


export default {
  getHomeMultidata,
  getHomeGoods
}