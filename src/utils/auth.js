import Cookies from 'js-cookie'

const TokenKey = 'token'
const UidKey = 'uid'
const OpenidKey = 'openid'

export function getToken() {
  return Cookies.get(TokenKey)
}

export function setToken(token) {
  return Cookies.set(TokenKey, token)
}

export function removeToken() {
  return Cookies.remove(TokenKey)
}

export function getUid() {
  return Cookies.get(UidKey)
}

export function setUid(token) {
  return Cookies.set(UidKey, token)
}

export function removeUid() {
  return Cookies.remove(UidKey)
}

export function getOpenid() {
  return Cookies.get(OpenidKey)
}

export function setOpenid(token) {
  return Cookies.set(OpenidKey, token)
}

export function removeOpenid() {
  return Cookies.remove(OpenidKey)
}
