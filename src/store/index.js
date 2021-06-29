import { createStore } from 'vuex'

export default createStore({
  state: {
    /**
     * Login status
     */
    loggedin : false,
    issignedup : false,
    loginBtnClicked : false,
    showLoginBool : false,
    showRegisterBool : false,


    /**
     * Error
     */
    error : '',











    /**
     * Arrays
     */
    headersArr : [],
    usersArr : []
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
