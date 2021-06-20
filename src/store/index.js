import { createStore } from 'vuex'

export default createStore({
  state: {
    getal : 1
  },
  mutations: {
    nextTurn(state){
      state.getal+=1
    }
  },
  actions: {
  },
  modules: {
  }
})