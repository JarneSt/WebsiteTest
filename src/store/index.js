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
    loadingGifShow : false,

    countColumns : '',

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
