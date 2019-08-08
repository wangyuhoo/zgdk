import request from '@/utils/request'
import {removeOpenid, removeToken, removeUid} from "../utils/auth";

export function login(username, passwd) {
  return request({
    url: '/v1/user/login',
    method: 'post',
    data: {
      username,
      passwd
    }
  })
}

export function getInfo(token) {
  return request({
    url: '/user/info',
    method: 'get',
    params: { token }
  })
}

export function logout() {
  console.log(111)
  removeToken()
  removeUid()
  removeOpenid()
}
