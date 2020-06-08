import Taro from '@tarojs/taro'

function getStorage(key) {
  return Taro.getStorage({ key }).then(res => res.data).catch(() => '')
}

/**
 * 简易封装网络请求
 * // NOTE 需要注意 RN 不支持 *StorageSync，此处用 async/await 解决
 * @param {*} options
 */
export default async function fetch(options) {
  const { url, payload, method = 'GET' } = options
  const token = await getStorage('token')
  const header = token ? { 'WX-PIN-SESSION': token, 'X-WX-3RD-Session': token } : {}
  if (method === 'POST') {
    header['content-type'] = 'application/json'
  }

  return Taro.request({
    url,
    method,
    data: payload,
    header
  }).then(async (res) => {
    const { code, data } = res.data
    if (code !== 200) {
      return Promise.reject(res.data)
    }
    return data
  }).catch((err) => {
    return Promise.reject({ message: '', ...err })
  })
}
