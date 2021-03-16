
import Vuex from 'vuex'
import Vue from 'vue'
import _ from 'lodash'
import { Datetime } from 'vue-datetime'
import 'vue-datetime/dist/vue-datetime.css'

Vue.use(Vuex)
Vue.use(Datetime)

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
export default store