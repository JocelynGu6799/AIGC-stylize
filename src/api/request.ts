/*
 * @Author: gjy1025 2787912196@qq.com
 * @Date: 2024-03-23 21:35:42
 * @LastEditors: gjy1025 2787912196@qq.com
 * @LastEditTime: 2024-03-24 13:05:35
 * @FilePath: \AIGC-vue3-ts\src\api\request.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import axios from 'axios'
import base from './base'
// import useUserStore from '@/stores/userstore'
import {showNotify} from 'vant'
import { useRouter } from 'vue-router'
import { ElMessage } from 'element-plus'
const router=useRouter()

const req = axios.create({
  baseURL: base.host,
  timeout: 30000
})

// 请求拦截
req.interceptors.request.use(
  (config) => {
    // 传递token,现用现取
    // const useStore=useUserStore()
    // config.headers.token=useStore.token

    return config
  },
  (err) => {
    return Promise.reject(err)
  }
)

// 响应拦截
req.interceptors.response.use(
  (res) => {
    // console.log(res)

    // 绘画成功
    // const isSuccess = res.data.statusCode === 200
    // const isDrawing=res.data.statusCode === 400
    // if (isDrawing) {
    //   console.log('');
      
    //   return res.data
    // }
    
  
//     if (isTokenExpired){
//       // 危险通知
// showNotify({ type: 'danger', message: '登录信息过期,请重新登陆' });
//     }
    

    // if (isSuccess) {
    //   return res.data
    // }
    return res.data
  },
  (err) => {
    // showNotify({ type: 'danger', message: '网络错误 即将跳转到主页面' })
    ElMessage.error('网络错误 即将跳转到主页面')
    setTimeout(()=>{
      router.push("/")
  },1000)

    return Promise.reject(err)
  }
)

export default req
