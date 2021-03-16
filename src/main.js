import Vue from 'vue'
import App from './App.vue'
import router from "./router/router";
import Vuex from 'vuex'
import _ from 'lodash'

Vue.use(Vuex)
const store = new Vuex.Store({
  state: {
    sum: 0,
    accountList: [],
  },
  mutations: {
    sumAccount(state) {
      state.sum = 2500
    },
    addAccountList(state, data) {
      state.accountList = _.concat(state.accountList, data)
    }
  }
})
Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')