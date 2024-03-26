/*
 * @Author: JocelynGu6799 2787912196@qq.com
 * @Date: 2024-03-22 15:21:08
 * @LastEditors: gjy1025 2787912196@qq.com
 * @LastEditTime: 2024-03-24 15:14:49
 * @FilePath: \AIGC-vue3-ts\src\main.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
// import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

import App from './App.vue'
import router from './router'
import '@/assets/css/index.scss'
import 'element-plus/dist/index.css'
// 2. 引入组件样式
import 'vant/lib/index.css';
import 'normalize.css'
import { useRouter } from "vue-router";
// import '@/utils/qrcode.min.js'
const app = createApp(App)
const pinia=createPinia()
pinia.use(piniaPluginPersistedstate)
app.use(pinia)
app.use(router)

app.use(pinia).mount('#app')
