<!--
 * @Author: gjy1025 2787912196@qq.com
 * @Date: 2024-03-22 19:16:31
 * @LastEditors: gjy1025 2787912196@qq.com
 * @LastEditTime: 2024-03-24 18:29:19
 * @FilePath: \AIGC-vue3-ts\src\views\AppView\index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<!--
 * @Author: JocelynGu6799 2787912196@qq.com
 * @Date: 2024-03-22 19:16:31
 * @LastEditors: gjy1025 2787912196@qq.com
 * @LastEditTime: 2024-03-24 14:12:50
 * @FilePath: \AIGC-vue3-ts\src\views\AppView\index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
    <div>
        <MyHeader :ifbtn="true"></MyHeader>
        <main></main>
    
    <div class="photo" ref="photo">
      <!-- <img src="img/生成照片区.png" width="900vw" /> -->
      <img :src="imgurl" width="100%" />
    </div>
    <div class="chongpai" @click="retake">
      <img src="@/assets/images/retakebtn.png" width="300vw" />
    </div>
    <div class="chongsheng" @click='uploadImg'>
      <img src="@/assets/images/remake.png" width="300vw" />
    </div>

    <div id="qrcode-container">
      <vue-qr
    :size="190"
    :margin="0"
    :auto-color="true"
    :dot-scale="1"
    :text="codedata"
/>

    </div>
    <img src="@/assets/images/save.png" alt="" class="save">
    </div>
</template>

<script setup lang="ts">
import { useDrawStore } from "@/stores/drawStore";
import { useRouter } from "vue-router";
import vueQr from 'vue-qr/src/packages/vue-qr.vue'
// import QRCode from "@/utils/qrcode.min.js";

import { onMounted, ref } from 'vue'

import { getQueuesApi, postUploadApi, getViewApi } from '@/api/draw'
import { ElLoading } from 'element-plus';

const drawStore=useDrawStore()
const imgurl=drawStore.imgurl
const router=useRouter()
// let qrcode=ref<any>(null)
const retake=()=>{
  router.push("/upload")
}
// 获取要生成二维码的数据
// var codedata = drawStore.imgurl;
var codedata =drawStore.imgurl;

 // 通过QR Code Generator库生成二维码
// qrcode = new QRCode(qrcode.value, {
//         text: data,
//         width: 300,
//         height: 300,
//       });
let uploadImg = () => {
    const svg = `
        <path class="path" d="
          M 30 15
          L 28 17
          M 25.61 25.61
          A 15 15, 0, 0, 1, 15 30
          A 15 15, 0, 1, 1, 27.99 7.5
          L 15 15
        " style="stroke-width: 0.4vw; fill: rgba(255, 255, 0)"/>
      `

    var fd = new FormData();
    var base64String = drawStore.dataUrl;
    var bytes = window.atob(base64String.split(",")[1]);
    var array = [];
    for (var i = 0; i < bytes.length; i++) {
        array.push(bytes.charCodeAt(i));
    }
    var blob = new Blob([new Uint8Array(array)], { type: "image/jpeg" });
    console.log("blob", blob);
    fd.append("image", blob, Date.now() + ".jpg");
    fd.append("prompt", drawStore.contentId);
    console.log("contentid", drawStore.contentId);
    fd.append("client", "cuz");
    console.log("formdata", fd);
    postUploadApi(fd).then((res) => {
     
        console.log("upload res", res);
        drawStore.prompt_id = res.prompt_id
        const intervalId = setInterval(() => {
            const loadingInstance = ElLoading.service({ fullscreen: true, text: "正在努力绘画中..." })

            getViewApi({ prompt_id: drawStore.prompt_id, client_id: "cuz" })
                .then((response) => {
                    console.log("view res", response);
                    if (response.statusCode === 200) {
                     
                        console.log("绘图成功", response);


                        const keys = Object.keys(response.data); // 获取对象的所有键
                        const firstKey = keys[0]; // 获取数组中的第一个键
                        const imgurl = response.data[firstKey]; // 获取第一个键对应的值
                        console.log("imgurl,", imgurl);
                        drawStore.imgurl=imgurl

                        loadingInstance.close()
                        
                        clearInterval(intervalId);
                        router.push("/view")


                    }
                    else if (response.statusCode === 400) {
                        console.log("等待绘图中...");
                    } else {
                        console.log("绘图失败");
                    }

                }).catch((error) => {
                    console.error("获取绘图数据失败:", error);
                });
        }, 2000)


    }).catch((error) => {
        console.error("获取上传数据失败:", error);
    });

}
</script>

<style scoped>
main {
        height: 178.8vw;
      }


      img {
        display: block;
        width: 100%;
        height: 100%;
      }

      .zhuye {
        float: right;
        margin-top: -174vw;
        margin-right: 15vw;
        width: 9.26vw;
		height: 9.26vw;
      }

      .lishi {
        float: right;
        margin-top: -174vw;
        margin-right: 5vw;
        width: 9.26vw;
		height: 9.26vw;
      }

      .photo {
        float: right;
        margin-top: -150vw;
        margin-right: 8vw;
        overflow: hidden;
        width: 85vw;
        height: 102vw;
      }

      .chongpai {
        float: right;
        margin-top: -40vw;
        margin-right: 55vw;
        width: 28vw;
		height: 9vw;
      }

      .chongsheng {
        float: right;
        margin-top: -25vw;
        margin-right: 55vw;
        width: 28vw;
		height: 9vw;
      }

      #qrcode-container {
        position: relative;
        overflow: hidden;
        float: right;
        margin-right: 20vw;
        margin-top: -42vw;
      }
#qrcode-container,#qrcode{
        width: 27.8vw;
        height: 27.8vw;
      }
      .save{
        width: 35vw;
        position:relative;
        left: 48vw;
        bottom: 10vw;
     
      }
</style>