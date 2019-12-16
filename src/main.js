import Vue from 'vue'
import App from './App'
import store from './store'
import {request} from '@/utils'

Vue.config.productionTip = false
App.mpType = 'app'

Vue.prototype.$store = store
Vue.prototype.$request = request

const app = new Vue(App)
app.$mount()
