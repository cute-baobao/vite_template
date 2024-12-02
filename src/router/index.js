//创建路由
import { KeepAlive } from "vue";
import {createRouter, createWebHistory} from "vue-router";
const router = createRouter({
    //路由历史模式
    history:createWebHistory(),
    //路由映射列表
    routes: [
        {
            //路径
            path:'/',
            //路由组件
            component:()=> import('../pages/index.vue'),
        },
    ]
})

/**
 * 路由守卫
 * @param to 路由目标对象
 * @param from 路由来源对象
 * @param next 跳转函数
 */
router.beforeEach((to, from, next) => {
    const pathUrl = ['/about', '/login', '/detail', '/more','/userDetail','/pointStore','/carbonComputed'];
    next()
});

export default router