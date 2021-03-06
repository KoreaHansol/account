
import Vuex from 'vuex'
import Vue from 'vue'
import _ from 'lodash'
import 'vue-datetime/dist/vue-datetime.css'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        seq: 0,
        sum: 0,
        accountList: [],
    },
    mutations: {
        sumAccount(state) {
            state.sum = 2500
        },
        addAccountList(state, data) {
            state.accountList = _.concat(state.accountList, _.merge(data, {seq: state.seq++}))
        }
    }
})
export default store