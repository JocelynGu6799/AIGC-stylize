/*
 * @Author: JocelynGu6799 2787912196@qq.com
 * @Date: 2024-03-22 15:21:08
 * @LastEditors: JocelynGu6799 2787912196@qq.com
 * @LastEditTime: 2024-03-22 19:31:34
 * @FilePath: \AIGC-vue3-ts\src\router\index.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { createRouter, createWebHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue'
import AppHome from '@/views/AppHome/index.vue'
import AppRecord from '@/views/AppRecord/index.vue'
import AppSelect from '@/views/AppSelect/index.vue'
import AppTeam from '@/views/AppTeam/index.vue'
import AppUpload from '@/views/AppUpload/index.vue'
import AppView from '@/views/AppView/index.vue'
import AppNotFound from '@/views/AppNotFound/index.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'AppHome',
      component: AppHome
    },
    {
      path: '/record',
      name: 'AppRecord',
      component: AppRecord
    },
    {
      path: '/select',
      name: 'AppSelect',
      component: AppSelect
    },
    {
      path: '/team',
      name: 'AppTeam',
      component: AppTeam
    },
    {
      path: '/upload',
      name: 'AppUpload',
      component: AppUpload
    },
    {
      path: '/view',
      name: 'AppView',
      component: AppView
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: AppNotFound,
      // meta: { hideFooter: true }
    }
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue')
    // }
  ]
})

export default router
