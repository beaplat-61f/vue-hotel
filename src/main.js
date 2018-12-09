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

import {
  /* eslint-disable no-unused-vars */
  Style,
  // basic
  Button,
  Loading,
  Tip,
  Toolbar,
  TabBar,
  TabPanels,
  // form
  Checkbox,
  CheckboxGroup,
  Radio,
  RadioGroup,
  Input,
  Textarea,
  Select,
  Switch,
  Rate,
  Validator,
  Upload,
  Form,
  // popup
  Popup,
  Toast,
  Picker,
  CascadePicker,
  DatePicker,
  TimePicker,
  SegmentPicker,
  Dialog,
  ActionSheet,
  Drawer,
  ImagePreview,
  // scroll
  Scroll,
  Slide,
  IndexList,
  Swipe,
  Sticky,
  ScrollNav,
  ScrollNavBar,
  RecycleList
} from 'cube-ui'

Vue.use(Button)
Vue.use(Loading)
Vue.use(Tip)
Vue.use(Toolbar)
Vue.use(TabBar)
Vue.use(TabPanels)
Vue.use(Checkbox)
Vue.use(CheckboxGroup)
Vue.use(Radio)
Vue.use(RadioGroup)
Vue.use(Input)
Vue.use(Textarea)
Vue.use(Select)
Vue.use(Switch)
Vue.use(Rate)
Vue.use(Validator)
Vue.use(Upload)
Vue.use(Form)
Vue.use(Popup)
Vue.use(Toast)
Vue.use(Picker)
Vue.use(CascadePicker)
Vue.use(DatePicker)
Vue.use(TimePicker)
Vue.use(SegmentPicker)
Vue.use(Dialog)
Vue.use(ActionSheet)
Vue.use(Drawer)
Vue.use(ImagePreview)
Vue.use(Scroll)
Vue.use(Slide)
Vue.use(IndexList)
Vue.use(Swipe)
Vue.use(Sticky)
Vue.use(ScrollNav)
Vue.use(ScrollNavBar)
Vue.use(RecycleList)

FastClick.attach(document.body)

Vue.prototype.$axios = axios;
Vue.config.productionTip = false

// 调用后台接口
// axios.get ('http://139.196.174.209:9005/wap/hotel/basicInfo?appId=1&version=1.0&sign=dc1785047d723694c92f3a55732f7d6e&hotelId=ec858cbd9f2148df9720be1ae20db06d').then (response => {
//   console.log(response.data)
// }).catch (error => {
//   console.log (error)
// })

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
