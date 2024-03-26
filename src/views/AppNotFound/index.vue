<!--
 * @Author: JocelynGu6799 2787912196@qq.com
 * @Date: 2024-03-22 19:27:56
 * @LastEditors: gjy1025 2787912196@qq.com
 * @LastEditTime: 2024-03-24 13:02:35
 * @FilePath: \AIGC-vue3-ts\src\views\AppNotFound\index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
    <div>
        <MyHeader :ifbtn="false"></MyHeader>
        <van-empty image-size="50vw" description="跑丢了..." class="vanempty"@click="handletoHome ">
            <van-button round  class="bottom-button">返回主页面</van-button>
        </van-empty>
        <!-- <el-empty :image-size="400" description="跑丢了...">
            <el-button type="primary" @click="handletoHome " >返回主页面</el-button>
        </el-empty> -->
        <!-- <el-button type="success" size="default" @click="">成功</el-button> -->



    </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';

const router = useRouter()
const handletoHome = () => {
    router.push('/')
}

</script>

<style scoped>
.el-empty {
    /* margin-top: 40vw; */
}

/* .el-empty__description p,.el-button,.el-button .el-button--primary{
    width:60vw;
    height: 10vw;
    font-size: 10vw;

} */

.bottom-button {
    width: 30vw;
    height: 15vw;
    font-size: 4vw;
    margin-top: 5vw;

}
.vanempty{
    font-size: 4vw;
    padding-top: 30vw;


}
</style>