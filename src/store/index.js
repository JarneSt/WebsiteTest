import { createStore } from 'vuex'

export default createStore({
  state: {
    getal : 1,
    balance : 500
  },
  mutations: {
    nextTurn(state){
      state.getal+=1
    },
    transactionAdded(state, amount){
      state.balance -= amount
    },
    transactionRemoved(state,amount){
      state.balance += amount
    }
  },
  actions: {
  },
  modules: {
  }
})