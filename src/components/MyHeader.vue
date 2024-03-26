<!--
 * @Author: gjy1025 2787912196@qq.com
 * @Date: 2024-03-22 20:22:25
 * @LastEditors: gjy1025 2787912196@qq.com
 * @LastEditTime: 2024-03-23 15:49:55
 * @FilePath: \AIGC-vue3-ts\src\components\MyHeader.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
    <div>
        <div class="nav">
            <img src="../assets/images/logo.png" alt="" class="logo" />
            <img src="../assets/images/recordbtn.png" alt=""  @click="goToRecord" v-if="ifbtn"/>

            <img src="../assets/images/home.jpg" alt="" class="goToHome" @click="goToHome" v-if="ifbtn" />
        </div>

    </div>
</template>

<script setup lang="ts">
export interface IHeaderProps {
    ifbtn?: boolean;//可选参数
 
}
import { onMounted } from 'vue';
import { useRouter } from 'vue-router';

 onMounted(() => {
    
    console.log(ifbtn);
   
    
 })
const {ifbtn=true}=defineProps<IHeaderProps>()

const router = useRouter()
const goToHome = () => {
    router.push({ name: 'AppHome' })

}
const goToRecord = () => {
    router.push({ name: 'AppRecord' })

}

</script>

<style scoped>
.nav {
    padding-top: 6.5vw;
    width: 100%;
    height: 8vw;
    background-color: rgb(0, 0, 0);
    position: fixed;
    z-index: 2;
    top: 0;
    /* background-color: pink; */
}

.logo {
margin-top: -4.3vw;
    width: 60vw;
}

.nav img:nth-child(1) {
    float: left;
    z-index: 6;
}

.nav img:nth-child(2) {
    float: right;
    margin-right: 6.4vw;
    margin-left: 1.7vw;
    width: 6.5vw;
    height: 6.5vw;
}

.nav img:nth-child(3) {
    float: right;
    width: 6.5vw;
    height: 6.5vw;
}
</style>