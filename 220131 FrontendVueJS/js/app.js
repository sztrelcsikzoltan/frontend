// globális változók
Vue.prototype.$logged = false;
Vue.prototype.$Uid="";

const routes=[
    {path:'/home',component:home},
    {path:'/autok',component:autok},
    {path:'/login',component:login}

]

const router=new VueRouter({
    routes
})

const app=new Vue({
    router
}).$mount('#app')