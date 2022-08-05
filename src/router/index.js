import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter)
/**
 * 配置router规则
 */

const routes = [
    {
        path:'/',
        name:'Home',
        component: () => import('../views/home/Home.vue'),
        children:[
            {
            path:'/user',
            name:'user',
            component:() => import("../views/user/User.vue")
            },
            {
                path:'/orderManagement',
                name:'orderManagement',
                component:() => import("../views/Management/orderManagement.vue")
            }
       ]
    },
    {
        path:'/login',
        name:'login',
        component: () => import('../views/login/Login.vue'),
    },
]


/**
 * 创建路由
 */

 const router = new VueRouter({
    mode: 'hash', // 匹配规则
    routes:routes,
    
})

/**
 * 是指路由重复。
          虽然对项目无影响，但是看到有红的不舒服！
 */
//获取原型对象上的push函数
const originalPush = VueRouter.prototype.push
//修改原型对象中的push方法
VueRouter.prototype.push = function push(location) {
   return originalPush.call(this, location).catch(err => err)
}

export default router