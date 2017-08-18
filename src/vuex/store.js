import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  isLoading: false,
  direction: 'forward',
  isShowFotter: true,
  headerConfig: {
    title: '',
    topTitle: '',
    showRight: false
  },
  user: {},
  system: {},
  room: {}
}
export default new Vuex.Store({
  state,
  mutations: {
    UPDATE_LOADING (state, payload) {
      state.isLoading = payload.isLoading
    },
    UPDATE_DIRECTION (state, payload) {
      state.direction = payload.direction
    },
    UPDATE_SHOW_FOTTER (state, payload) {
      state.isShowFotter = payload.isShowFotter
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
    UPDATE_ROOM (state, payload) {
      state.room = payload.room
    }
  }
})
