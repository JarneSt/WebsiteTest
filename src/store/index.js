import { createStore } from 'vuex'

export default createStore({
  state: {
    getal : 1,
    balance : 0
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
    },
    updateBalance(state){
      if (localStorage.getItem('balance') === null){
        localStorage.setItem('balance', 500);
        state.balance = parseInt(localStorage.getItem('balance'));
      }
      else{
        state.balance = parseInt(localStorage.getItem('balance'));
      }
    }
  },
  actions: {
  },
  modules: {
  }
})