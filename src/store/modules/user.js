import {
  USERS_GET
} from "@/store/actions/user"


import axios from "axios"

const state = {}

const getters = {}

const actions = {
  /* Get all users */
  [USERS_GET]: ({getters}) => {
    return new Promise((resolve, reject) => {
      axios.get(
        getters.getFullURL + '/user/'
      ).then(response => {
        const userList = response.data.users
        resolve(userList)
      }).catch(error => reject(error))
    })
  }
}

const mutations = {

}


export default {
  state,
  getters,
  actions,
  mutations,
}
