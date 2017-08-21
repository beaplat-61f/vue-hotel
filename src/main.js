// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import FastClick from 'fastclick'
import router from './router'
import {sync} from 'vuex-router-sync'
import store from './vuex/store'
import axios from 'axios'
import {system, user} from './mock/mock'
import './style/base.css'
import App from './App'

FastClick.attach(document.body)

Vue.prototype.$axios = axios;
Vue.config.productionTip = false


axios.get ('http://system.cn').then (response => {
  store.commit ('UPDATE_SYSTEM', response.data)
}).catch (error => {
  console.log (error)
})

axios.get ('http://user.cn').then (response => {
  console.log(response.data)
  store.commit ('UPDATE_USER', response.data)
}).catch (error => {
  console.log (error)
})

sync (store, router)
router.beforeEach (function (to, from, next) {
  store.commit ('UPDATE_LOADING', {isLoading: true})
  /*if (typeof localStorage.username == 'undefined') {
    axios.get ('http://login.cn').then (response => {
      console.log (response.data)
      for (let key in response.data) {
        localStorage.setItem (key, response.data[key])
      }
    }).catch (error => {
      console.log (error)
    })
  }

  let user = {
    name: localStorage.getItem('username'),
    id: localStorage.getItem('userid'),
    proxy: localStorage.getItem('userproxy'),
    img: localStorage.getItem('userimg'),
    code: localStorage.getItem('paperno'),
    hometown: localStorage.getItem('hometown'),
    sex: localStorage.getItem('sex'),
    type: localStorage.getItem('papertype'),
    end: localStorage.getItem('paperend'),
    phone: localStorage.getItem('phone'),
    isAttest: true
  }

  store.commit('UPDATE_SHOW_FOTTER', {isShowFotter: true})
  store.commit('UPDATE_USER', user)*/
  next ()
})

router.afterEach (function (to) {
  store.commit ('UPDATE_LOADING', {isLoading: false})
})
/* eslint-disable no-new */
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app-box')
