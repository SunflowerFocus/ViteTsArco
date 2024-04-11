import axios from "axios";

const service = axios.create({
  baseURL: "/",
  timeout: 20000
})

export const getMenus = (params?: any) => {
  return service({
    url: "/api/menus",
    method: "get",
    params
  })
}

export const getGoods = (params?: any) => {
  return service({
    url: "/api/goods",
    method: "get",
    params
  })
}

export const getUsers = (params?: any) => {
  return service({
    url: "/api/users",
    method: "get",
    params
  })
}