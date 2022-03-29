import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
      day: 25,
      month: 5,
      year: 2023,
  },
  getters: {
      formatedDate(state) {
          return `${state.day}/${state.month}/${state.year}`
      }
  },
  mutations: {
      INCREMENT_MONTH(state) {
          state.month += 1
      },
      INCREMENT_YEAR(state) {
          state.year += 1
          state.month = 1
      }
  },
  actions: {
      incrementMonth(context) {
          if (context.state.month + 1 > 12) {
              context.commit('INCREMENT_YEAR')
          } else {
              context.commit('INCREMENT_MONTH')
          }

      }
  },
  modules: {
  }
})
