import Vue from 'vue'
import Vuex from 'vuex'
import createLogger from 'vuex/dist/logger'

const debug = process.env.NODE_ENV!=='production'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    userInfo: {
      name:'lin'
    }
  },
  mutations: {
    increment: (state) => {
      const obj = state
      obj.count += 1
    },
    decrement: (state) => {
      const obj = state
      obj.count -= 1
    }
  },
  plugins:debug?[createLogger()]:[]
})

export default store
