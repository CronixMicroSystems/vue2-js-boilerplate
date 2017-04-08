import Vue from 'vue'
import VueRouter from 'vue-router'
import * as App from './containers/app.vue'
import './style/common'
import './config/rem'

const VueMaterial = require('vue-material')

Vue.use(VueRouter)
Vue.use(VueMaterial)

// const router = new VueRouter({
//   mode: 'history',
//   routes
// })

Vue.material.registerTheme({
  default: {
    primary: 'blue',
    accent: 'red'
  },
  green: {
    primary: 'green',
    accent: 'pink'
  },
  orange: {
    primary: 'orange',
    accent: 'green'
  }
})
new Vue(App).$mount('#root')
