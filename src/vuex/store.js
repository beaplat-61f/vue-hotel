import Vue from 'vue'
import Vuex from 'vuex'
import {dateFormat} from 'vux'

Vue.use(Vuex)

let now = new Date(),
    next = now.getTime()+(1000*60*60*24)

const state = {
  isLoading: false,
  isShowFotter: true,
  isShowMsgtip: true,
  headerConfig: {
    title: '',
    topTitle: '',
    showRight: false
  },
  user: {},
  system: {},
  hotel: {},
  room: {},
  order: {
    begin: now,
    end: new Date(next),
    total_day: 1
  }
}
export default new Vuex.Store({
  state,
  mutations: {
    UPDATE_LOADING (state, payload) {
      state.isLoading = payload.isLoading
    },
    UPDATE_SHOW_FOTTER (state, payload) {
      state.isShowFotter = payload.isShowFotter
    },
    UPDATE_SHOW_MSGTIP (state, payload) {
      state.isShowMsgtip = payload.isShowMsgtip
    },
    UPDATE_HEADER (state, payload) {
      for(let key in payload) {
        state.headerConfig[key] = payload[key]
      }
    },
    UPDATE_USER (state, payload) {
      for(let key in payload) {
        state.user[key] = payload[key]
      }
    },
    UPDATE_SYSTEM (state, payload) {
      for(let key in payload) {
        state.system[key] = payload[key]
      }
    },
    UPDATE_HOTEL (state, payload) {
      state.hotel = payload.hotel
    },
    UPDATE_ROOM (state, payload) {
      state.room = payload.room
    },
    UPDATE_ORDER (state, payload) {
      for(let key in payload) {
        state.order[key] = payload[key]
      }
    }
  }
})
