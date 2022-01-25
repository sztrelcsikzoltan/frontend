const routes = [
    {path:"/home", component: home},
    {path: "/autok", component: autok}
]

const router = new VueRouter({
    routes
})

const app = new Vue({
    router
}).$mount('#app')
