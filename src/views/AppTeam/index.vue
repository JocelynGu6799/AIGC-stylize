<!--
 * @Author: gjy1025 2787912196@qq.com
 * @Date: 2024-03-22 19:15:03
 * @LastEditors: gjy1025 2787912196@qq.com
 * @LastEditTime: 2024-03-24 18:33:53
 * @FilePath: \AIGC-vue3-ts\src\views\Appteam\index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
    <div class="team">
        <main>
            <MyHeader :ifbtn="true"></MyHeader>

            <img src="@/assets/images/logo.png" class="logo" />
            <div class="content">

                学生制作团队：<br>
                桑菲阳 徐嘉杞 贾贝希 <br>
                王紫茹 李牧展 顾菁仪 <br>
                宋鹏伟 张洛 汪瑾 杨云戈<br>
                <br>
                指导教师：<br>
                张随雨<br>
            </div>
            <img src="@/assets/images/play.png" @click="buttonplay" width="30%" height="15%" class="button-play" />
        </main>
    </div>
</template>

<script setup lang="ts">
import { getQueuesApi } from '@/api/draw';
import { useRouter } from 'vue-router';

const router = useRouter()


const buttonplay = () => {
    router.push('/select')

}
</script>

<style scoped>
.team {
    height: 178.7vw;
    background-image: url('@/assets/images/background.jpg') !important;

    background-repeat: no-repeat;
    background-size: cover;
}

img {
    display: block;
}

.logo {
    float: left;
    margin-top: 2vw;
    width: 60vw;
}

.title-text {
    width: 45.95vw;
}

.line {
    float: left;
    margin-top: 5vw;
    margin-left: 25vw;
}

.content {
    float: left;
    font-size: 4vw;
    font-family: 'SimHei';
    color: rgb(255, 255, 255);
    margin-top: 85vw;
    margin-left: -50vw;
}

.button-play {
    float: left;
    margin-top: 130vw;
    margin-left: -35vw;
}
</style>