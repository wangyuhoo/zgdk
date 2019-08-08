import {Indicator} from "mint-ui";

export function formatSecond(value) {
  let secondTime = parseInt(value)// 秒
  let minuteTime = 0// 分
  let hourTime = 0// 小时
  if (secondTime > 60) {//如果秒数大于60，将秒数转换成整数
    //获取分钟，除以60取整数，得到整数分钟
    minuteTime = parseInt(secondTime / 60)
    //获取秒数，秒数取佘，得到整数秒数
    secondTime = parseInt(secondTime % 60)
    //如果分钟大于60，将分钟转换成小时
    if (minuteTime > 60) {
      //获取小时，获取分钟除以60，得到整数小时
      hourTime = parseInt(minuteTime / 60)
      //获取小时后取佘的分，获取分钟除以60取佘的分
      minuteTime = parseInt(minuteTime % 60)
    }
  }
  if (hourTime < 10) {
    hourTime = '0' + hourTime
  }
  if (minuteTime < 10) {
    minuteTime = '0' + minuteTime
  }
  if (secondTime < 10) {
    secondTime = '0' + secondTime
  }
  return hourTime + ' : ' + minuteTime + ' : ' + secondTime
}

export function isIOS() {
  let isIphone = navigator.userAgent.includes('iPhone')
  let isIpad = navigator.userAgent.includes('iPad')
  return isIphone || isIpad
}


export function commonButtonClick(buttonInfo, router, closure = undefined) {
  buttonInfo = JSON.parse(buttonInfo)
  // 跳转
  if (buttonInfo.open_type === 'redirect') {
    if (buttonInfo.indicator) {
      Indicator.open('跳转中...');
    }
    let redirect = {
      path: buttonInfo.url_info.path,
      query: buttonInfo.url_info.query
    }
    Indicator.close();
    router.push(redirect)
  }
  // 分享
  if (buttonInfo.open_type === 'share') {
    closure && closure()
  }

}
