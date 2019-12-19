const baseUrl = 'http://192.168.14.52:6001/'

export function request(url, param) {
  console.log(baseUrl)
  return new Promise((resolve, reject) => {
    try {
      wx.request({
        url: baseUrl + url,
        ...param,
        suceess(res) {
          console.log(res)
          resolve(res)
        },
        fail(err) {
          console.log(err)
          reject(err)
        }
      })
    } catch (err) {
      console.log(err)
    }
  })
}

export function formatNumber(n) {
  const str = n.toString()
  return str[1] ? str : `0${str}`
}

export function formatTime(date) {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()

  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  const t1 = [year, month, day].map(formatNumber).join('/')
  const t2 = [hour, minute, second].map(formatNumber).join(':')

  return `${t1} ${t2}`
}

