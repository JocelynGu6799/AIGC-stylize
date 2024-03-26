<!--
 * @Author: gjy1025 2787912196@qq.com
 * @Date: 2024-03-22 16:46:12
 * @LastEditors: gjy1025 2787912196@qq.com
 * @LastEditTime: 2024-03-24 15:52:21
 * @FilePath: \AIGC-vue3-ts\src\views\AppHome\index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>,
    <div>
        <div class="bg"></div>
        <MyHeader :ifbtn="false"></MyHeader>
        <div class="content">
            我们致力于开发智能生成平台以及AIGC<br>
			风格化迁移等相关项目。在智能生成平<br>
			台方面，我们探索并实现了各种基于人<br>
			工智能的生成模型，旨在通过深度学习<br>
			和自然语言处理技术，实现对文本、图<br>
			像、音频等多种类型内容的自动化生成。<br>
			而在AIGC风格化迁移项目中，我们致力<br>
			于研究如何利用先进的机器学习算法，<br>
			使得用户能够将不同风格的内容进行迁<br>
			移和转换，从而创造出新颖、富有创意<br>
			的作品。通过持续的研究和实验，我们<br>
			的目标是推动AIGC技术的发展，为用户<br>
			提供更加智能、便捷、多样化的内容生<br>
			成和创作工具，从而开启全新的数字创<br>
			作时代。<br>
        </div>
        <img src="@/assets/images/team.png" @click="buttonteam" width="25%" class="button-team"/>
        <img src="@/assets/images/play.png" @click="buttonplay" width="25%"class="button-play" />
    </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
import { Button } from 'vant';
const router = useRouter()
const buttonteam=()=>{
    router.push('/team')

}
const buttonplay=()=>{
    router.push('/select')

}
</script>

<style scoped>
.bg{
    width: 100vw;
    height: 178.8vw;
    position: absolute;
    top: 0;
    background-image: url('@/assets/images/background.jpg') !important;
   
    background-repeat: no-repeat;
    background-size: cover;
    z-index: 0;
}
.content {
    position: absolute;

    float: left;
    font-size: 4vw;
    font-family: 'SimHei';
    color: rgb(255, 255, 255);
    margin-top: 65vw;
    margin-left: 5vw;
    z-index: 100;
}

.button-team {
    position: absolute;

    /* float: left; */
    /* margin-top: 138vw;
    margin-left: -66vw; */
    z-index: 100;
    width: 30vw;
    bottom: 5vw;
    right: 20vw;

}

.button-play {
    position: absolute;

    /* float: left; */
    /* margin-top: 138vw;
    margin-left: -42vw; */
    z-index: 10;
    width: 30vw;
    bottom: 5vw;
    /* right: 20vw; */
    right: 55vw;



}
</style>