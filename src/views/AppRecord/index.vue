<!--
 * @Author: gjy1025 2787912196@qq.com
 * @Date: 2024-03-22 19:18:22
 * @LastEditors: gjy1025 2787912196@qq.com
 * @LastEditTime: 2024-03-24 15:34:05
 * @FilePath: \AIGC-vue3-ts\src\views\AppRecord\index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
    <div>
        <MyHeader :ifbtn="true"></MyHeader>
        <img src="@/assets/images/maketitle.png" alt="" class="title" />
        <div class="imgbox">
            <img :src="item" alt="" v-for="(item, index) in imglist" :key="index" class="scimg"  lazy >
            <!-- 放置图片 -->
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { getOssApi } from '@/api/draw'
import { useRouter } from "vue-router";
import { onBeforeMount } from "vue";
let imglist = ref<string[]>([''])
const router=useRouter();


onMounted(() => {
    getOssApi({client_id:"cuz"}).then((res) => {
        console.log("oss res", res);
        imglist.value = res.imgUris
        console.log('imglist', imglist.value);


    })
        .catch((err) => console.log(err)
        )
   
})
</script>

<style scoped>
.title {
        width: 45.95vw;
        z-index: 4;
        margin-top: 10vw;
      }
.imgbox {
    /* background-color: rgb(190, 83, 83); */
    width: 92.8vw;
    display: flex;
    flex-wrap: wrap;
    /* height: 8000px; */
}

.scimg {
    width: 40.4vw;
    height: 48.48vw;
    background-color: rgb(255, 255, 255);
    border-radius: 5vw;
    margin-left: 5.6vw;
    margin-bottom: 5.6vw;
    overflow: hidden;
}
</style>