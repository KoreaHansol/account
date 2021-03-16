import Vue from 'vue'
import Router from 'vue-router'
import Home from "@/pages/home/index.vue"
import AccountList from "@/pages/accountList/index.vue"
import AccountAdd from "@/pages/accountAdd/index.vue"

Vue.use(Router)
export default new Router({
    mode: 'history',
    routes: [
        {
            path: "/",
            name: "Home",
            component:Home
        },
        {
            path: "/accountList",
            name: "AccountList",
            component: AccountList
        },
        {
            path: "/accountAdd",
            name: "AccountAdd",
            component: AccountAdd
        }
    ]
})