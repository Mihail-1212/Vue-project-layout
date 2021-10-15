import App from './App.vue'
import VueAxios from 'vue-axios'
import axios from 'axios'
import router from './router'
import store from './store'
import { createApp } from 'vue'


// Setting headers for axios
const headers = {
  "accept": "application/json",
  "Content-Type": "application/json",
}
axios.defaults.headers.common = Object.assign({}, axios.defaults.headers.common, headers)

// Application creation
const mainApp = createApp(App)

// Installing axios
mainApp.use(VueAxios, axios)

// Installing the storage
mainApp.use(store)

// Setting up routing
mainApp.use(router)

// Application launch
mainApp.mount('#app')
