import axios from 'axios'

export default class Api {

  constructor (router, store) {
    axios.defaults.withCredentials = true
    this.router = router
    this.store = store
    this.config = {
      baseURL: import.meta.env.VITE_BASE_API,
      timeout: 30000, // 30s
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest',
        'Accept-Language': 'id',
      },
    }
  }

  REQUEST (conf) {
    return new Promise(async (resolve, reject) => {
      try {
        const response = await axios.request(conf)
        resolve(response.data)
      } catch (error) {
        this.handlesError(error)
        reject(error)
      }
    })
  }
  GET (url, params) {
    return this.REQUEST({ ...this.config, method: 'get', url, params })
  }
  POST (url, data) {
    return this.REQUEST({ ...this.config, method: 'post', url, data })
  }
  DELETE (url, data) {
    return this.REQUEST({ ...this.config, method: 'delete', url, data })
  }
  PUT (url, data) {
    return this.REQUEST({ ...this.config, method: 'put', url, data })
  }

  /* https://github.com/axios/axios#handling-errors */
  handlesError (error) {
    if (import.meta.env.DEV) {
      console.error(error)
    }

    if (error.response) {
      /**
       * The request was made and the server responded with a
       * status code that falls out of the range of 2xx
       */
      if (error.response.status === 401 && location.pathname !== 'login') {
        const path = location.pathname.substring(1) + location.search
        const query = path ? { r: '/' + path } : {}
        this.router.replace({ name: 'login', query })
      // } else if (error.response.status === 503) {
      //   this.router.replace({ name: 'maintenance' })
      // } else {
      //   this.store.commit('setHttpStatus', error.response.status)
      }
    } else if (error.request) {
      /**
       * The request was made but no response was received.
       * `error.request` is an instance of XMLHttpRequest
       * in the browser and an instance of
       * http.ClientRequest in node.js
       */
    } else {
      /* Something happened in setting up the request that triggered an Error */
    }
  }
}
