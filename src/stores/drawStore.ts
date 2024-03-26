/*
 * @Author: gjy1025 2787912196@qq.com
 * @Date: 2024-03-23 13:01:33
 * @LastEditors: gjy1025 2787912196@qq.com
 * @LastEditTime: 2024-03-23 22:49:16
 * @FilePath: \AIGC-vue3-ts\src\stores\drawStore.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { defineStore } from "pinia"
import { ref } from "vue"

export const useDrawStore = defineStore('draw', () => {
    //`ref()` 就是 `state` 属性
    const contentId = ref('')
    const dataUrl = ref('')
    const prompt_id = ref('')
    const imgurl = ref('')
    

    //`computed()` 就是 `getters`
    
    //`function()` 就是 `actions`
    // function increment() {
    //   count.value++
    // }
  
    return { contentId ,dataUrl,prompt_id,imgurl}
  },{persist:true})