import request from '@/utils/request'

export function reqLogin(data) {
  return request({
    method: 'post',
    url: '/sys/login',
    data
  })
    
}

export function getInfo() {
 

}

export function logout() {

}
