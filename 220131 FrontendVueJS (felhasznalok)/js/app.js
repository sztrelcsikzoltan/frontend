// globális változók
Vue.prototype.$logged = false;
Vue.prototype.$Uid = "";
Vue.prototype.$pageTitle = "";

const routes = [
    { path: '/home', component: home },
    { path: '/autok', component: autok },
    { path: '/login', component: login },
    { path: '/felhasznalok', component: felhasznalok }

]

const router = new VueRouter({
    routes
})

const app = new Vue({
    router
}).$mount('#app')