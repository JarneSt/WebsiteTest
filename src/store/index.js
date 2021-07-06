import { createStore } from 'vuex'

export default createStore({
  state: {
    /**
     * CSVEDITOR
     */



    /**
     * Login status
     */
    loggedin : false,
    issignedup : false,
    loginBtnClicked : false,
    showLoginBool : false,
    showRegisterBool : false,
    loadingGifShow : false,
    /**
     * Error
     */
    error : '',


    /**
     * Profile
     */

    profilePicture : '',



    /**
     * Arrays
     */
    headersArr : [],
    usersArr : []



    //---------------------------------------------------------------------------

    /**
     * DOGS
     */


  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
