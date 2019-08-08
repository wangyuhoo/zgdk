import request from "@/utils/request";

export function sqdk(data) {
  //let url = '/zgdk'
  let url = 'http://crm.xxx.com/index.php?r=zgdk/apply'
  return request({
    url: url,
    method: 'post',
    data: data
  })
}

export function sendSms(phone) {
  //let url = '/verify_code?phone=' + phone
  let url = 'http://crm.xxx.com/index.php?r=zgdk/send-code&phone=' + phone
  return request({
    url: url,
    method: 'get'
  })
}
