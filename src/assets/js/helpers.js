function httpGet (url) {
  return new Promise(function (resolve, reject) {
    const xhr = new XMLHttpRequest()
    xhr.open('GET', url, true)

    xhr.onload = function () {
      if (this.status === 200) {
        resolve(this.response)
      } else {
        const error = new Error(this.statusText)
        error.code = this.status
        reject(error)
      }
    }

    xhr.onerror = function () {
      reject(new Error('Network Error'))
    }

    xhr.send()
  })
}

function setCookie (name, value, options) {
  options = options || {}

  let expires = options.expires

  if (typeof expires === 'number' && expires) {
    const d = new Date()
    d.setTime(d.getTime() + expires * 1000)
    expires = options.expires = d
  }
  if (expires && expires.toUTCString) {
    options.expires = expires.toUTCString()
  }

  value = encodeURIComponent(value)

  let updatedCookie = name + '=' + value

  for (const propName in options) {
    updatedCookie += '; ' + propName
    const propValue = options[propName]
    if (propValue !== true) {
      updatedCookie += '=' + propValue
    }
  }

  document.cookie = updatedCookie
}

function getCookie (name) {
  // eslint-disable-next-line
  const matches = document.cookie.match(new RegExp(
    // eslint-disable-next-line
    '(?:^|; )' + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + '=([^;]*)'
  ))
  return matches ? decodeURIComponent(matches[1]) : undefined
}

function deleteCookie (name) {
  document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:01 GMT;'
}

export { httpGet, getCookie, setCookie, deleteCookie }
