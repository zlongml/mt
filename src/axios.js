import axios from 'axios'
axios.defaults.baseURL = 'https://open.duyiedu.com'
axios.interceptors.request.use(function (config) {
  config.params = {
    ...config.params,
    appkey: 'xiaowang_key_1626615389959'
  }
  return config
}, function (error) {
  return Promise.reject(error)
})

export default axios
