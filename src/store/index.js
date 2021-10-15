import userModules from "@/store/modules/user"
import { createStore } from 'vuex'


let storeOptions = {
  state: {
      url: {
          urlProtocol: "http",
          domain: "127.0.0.1",
          port: "8090",
          version: "v1"
      },
  },
  getters: {
      /* Returns the full url to the api */
      getFullURL: state => {
          return `${state.url.urlProtocol}://${state.url.domain}:${state.url.port}/api/${state.url.version}`
      }
  },
}

const assignObject = (saveObject, addObject) => {
  Object.keys(addObject).forEach( (currentValue) => {
      saveObject[currentValue] = Object.assign({}, saveObject[currentValue], addObject[currentValue])
  })
}

// Connecting users
assignObject(storeOptions, userModules)


export default createStore(storeOptions)
