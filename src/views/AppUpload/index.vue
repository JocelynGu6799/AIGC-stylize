<!--
 * @Author: gjy1025 2787912196@qq.com
 * @Date: 2024-03-22 19:15:19
 * @LastEditors: gjy1025 2787912196@qq.com
 * @LastEditTime: 2024-03-24 18:13:47
 * @FilePath: \AIGC-vue3-ts\src\views\AppUpload\index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<!--
 * @Author: JocelynGu6799 2787912196@qq.com
 * @Date: 2024-03-22 19:15:19
 * @LastEditors: gjy1025 2787912196@qq.com
 * @LastEditTime: 2024-03-23 19:53:44
 * @FilePath: \AIGC-vue3-ts\src\views\AppUpload\index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
    <div class="upload">
        <MyHeader :ifbtn="true"></MyHeader>
        <main></main>
        <div class="mystate" ref="mystate"></div>

        <div class="queren">
            <img src="@/assets/images/confirmbtn.png" width="300vw" @click="uploadImg" />
        </div>
        <div class="chongpai"><img src="@/assets/images/retakebtn.png" width="300vw" @click="reload" /></div>
        <!-- <div class="paizhao"><img src="拍照区.png" width="1200vw" /></div> -->
        <div class="getphoto">
            <img @click="capture()" src="@/assets/images/take.png" width="200vw" id="captureButton" />
        </div>

        <div id="video-container">
            <video ref="video" id="video" playsinline autoplay @loadedmetadata="onVideoLoaded"></video>
            <canvas ref="canvas" id="canvas" width="640" height="480" style="display: none"></canvas>
        </div>

        <div id="decreaseSize">
            <div class="jianxiao" @click="decrease"><img src="@/assets/images/-.png" width="70vw" /></div>
        </div>
        <div id="increaseSize">
            <div class="fangda" @click="increase"><img src=" @/assets/images/+.png" width="70vw" /></div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useDrawStore } from "@/stores/drawStore";
import { getQueuesApi, postUploadApi, getViewApi } from '@/api/draw'
import { ElLoading } from 'element-plus';
import { useRouter } from "vue-router";
const router=useRouter();
// import type { postUploadApi } from '@/api/draw';

// postUploadApi
let video = ref<any>(null);
let canvas = ref<any>(null);
let context = ref<any>(null);
let mystate = ref<any>(null);
// let context = ref(null);


let scale = ref(1.8);
let videoFrameWidth = ref(0);
let videoFrameHeight = ref(0);
let videoFrameX = ref(0);
let videoFrameY = ref(0);
let dataUrl = ref('');
let drawStore = useDrawStore();
// video = document.getElementById("video");

const onVideoLoaded = () => {
    // 在视频加载完成后获取视频宽度
    // console.log(" video.value.videoWidth",  video.value.videoWidth);
    // 计算视频和画布中心点坐标
    let videoCenterX = video.value.videoWidth / 2;
    let videoCenterY = video.value.videoHeight / 2;
    let canvasCenterX = canvas.value.width / 2;
    let canvasCenterY = canvas.value.height / 2;

    // 计算视频帧在画布上的位置
    videoFrameWidth.value = video.value.videoWidth * scale.value;

    videoFrameHeight.value = video.value.videoHeight * scale.value;
    videoFrameX.value = canvasCenterX - videoFrameWidth.value / 2;
    videoFrameY.value = canvasCenterY - videoFrameHeight.value / 2;
    // console.log(" videoFrameX.value", videoFrameX.value);

}
//   canvas = document.getElementById("canvas");
// context = canvas.getContext("2d");
onMounted(() => {
    // console.log("video.value", video.value);
    // console.log("video", video);
    // console.log("canvas.value", canvas.value);
    context = canvas.value.getContext("2d");
    // console.log("context", context);




    // 初始更新一次尺寸
    updateSize();
    getGreen();
    // 更新视频和画布的尺寸


    // 获取摄像头
    navigator.mediaDevices.getUserMedia({ video: true })
        .then((stream) => {
            video.value.srcObject = stream;
        })
        .catch((err) => {
            console.error("访问摄像头失败:", err);
        });
});
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
        getGreen();
        console.log("upload res", res);
        drawStore.prompt_id = res.prompt_id
        const intervalId = setInterval(() => {
            const loadingInstance = ElLoading.service({ fullscreen: true, text: "正在努力绘画中..." })

            getViewApi({ prompt_id: drawStore.prompt_id, client_id: "cuz" })
                .then((response) => {
                    console.log("view res", response);
                    if (response.statusCode === 200) {
                        getGreen();
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
                        loadingInstance.close()
                    clearInterval(intervalId);
                    }

                }).catch((error) => {
                    console.error("获取绘图数据失败:", error);
                    loadingInstance.close()
                    clearInterval(intervalId);
                    setTimeout(()=>{
                        router.push("/")
                    },1000)
                   
                });
        }, 2000)


    }).catch((error) => {
        console.error("获取上传数据失败:", error);
    });

}
let updateSize = () => {
    // 限制尺寸在100%到300%之间
    scale.value = Math.min(Math.max(scale.value, 1), 3);
    video.value.style.transform = `scale(${scale.value})`;
    onVideoLoaded()
}

let getGreen = () => {

    // 根据实际情况获取状态，并设置颜色
    getQueuesApi().then((res) => {
        console.log("queue res", res);
        if (res.exec_info.queue_remaining === 0) {
            mystate.value.style.backgroundColor = 'green'
        } else {
            mystate.value.style.backgroundColor = 'red'

        }


    }).catch((error) => {
        console.error("获取状态数据失败:", error);
    });
}
// 增加尺寸按钮点击事件
let increase = () => {
    scale.value *= 1.2; // 增加20%
    updateSize();
}
// 减小尺寸按钮点击事件
let decrease = () => {
    scale.value *= 0.8; // 减少20%
    updateSize();
}
const capture = () => {
    if(dataUrl.value===''){

    console.log("click");

    // 将视频帧绘制到Canvas上
    context.clearRect(0, 0, canvas.value.width, canvas.value.height);
    // console.log(canvas.value.width, canvas.value.height);

    context.drawImage(
        video.value,
        videoFrameX.value,
        videoFrameY.value,
        videoFrameWidth.value,
        videoFrameHeight.value
    );
    saveAs(canvas.value.toDataURL(), "photo.jpg");
    // 显示Canvas，隐藏视频
    video.value.style.display = "none";
    canvas.value.style.display = "block";
    dataUrl.value = canvas.value.toDataURL();
    drawStore.dataUrl = dataUrl.value;
}

}
function saveAs(data: any, filename: any) {
    let link = document.createElement("a");
    link.href = data;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}
const reload = () => {
    location.reload();
}
</script>

<style scoped>
main {
    height: 178.8vw;
    width: 100vw
}

.upload {
    width: 100vw;
    background-image: url("@/assets/images/bg2.jpg");
    background-size: cover;
}

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
    /* background-color: palegreen; */
}

.lishi {
    float: right;
    margin-top: -174vw;
    margin-right: 5vw;
    width: 9.26vw;
    height: 9.26vw;
    /* background-color: palegreen; */
}

.queren {
    float: right;
    margin-top: -152vw;
    margin-right: 15vw;
    width: 28vw;
    height: 9vw;
}

.chongpai {
    float: right;
    margin-top: -162vw;
    margin-right: 15vw;
    width: 28vw;
    height: 9vw;
    /* background-color: palegreen; */
}

.paizhao {
    float: right;
    margin-top: -135vw;
    margin-right: 10vw;
}

.getphoto {
    float: right;
    margin-top: -30vw;
    margin-right: 40.75vw;
    width: 18.5vw;
    height: 18.5vw;
    /* background-color: palegreen; */
}

.jianxiao {
    float: right;
    margin-top: -30vw;
    margin-right: 80vw;
    width: 6.48vw;
    height: 6.48vw;
    /* background-color: palegreen; */
}

.fangda {
    float: right;
    margin-top: -30vw;
    margin-right: 15vw;
    width: 6.48vw;
    height: 6.48vw;
    /* background-color: palegreen; */
}

#video-container {
    position: relative;
    width: 74vw;
    height: 101.9vw;
    overflow: hidden;
    border-radius: 5%;
    float: right;
    margin-right: 13vw;
    margin-top: -135vw;
    z-index: 100
}

#video {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

#canvas {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

/* #workflowSelect {
				position: absolute;
				font-size: 25px;
				color: rgb(5, 5, 5);
				top: 150px;
			} */

.mystate {
    width: 5vw;
    height: 5vw;
    background-color: yellow;
    border-radius: 50%;
    position: absolute;
    top: 20vw;
    right: 7vw;
    font-size: 4vw;
}

.el-message {
    font-size: 5vw;

}

/* ::v-deep.van-notify{
    font-size: 10vw !important;
} */
</style>