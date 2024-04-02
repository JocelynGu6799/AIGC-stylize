<template>
  <div>
    <MyHeader :ifbtn="true"></MyHeader>
    <div class="background-container">
			<div class="background-image"> <!-- 背景图片 -->
				<img src="@/assets/images/Page 2/img/background.png" alt="" style="position: absolute; object-fit: cover;width: 100%;height: 100%;">
				<img src="@/assets/images/step_one.png" alt="" style="position: absolute; object-fit: cover;width: 100%;height: 100%;">
<!-- 				
				<div class="menu-container">
					<div class="logo">
						<img src="img/logo.png" alt="logo" style="height: 100%;width: 100%;">
					</div>
					<div class="box">
						<a href="index.html" >
							<img src="img/first-page.png" alt="first-page" >
						</a>
						<a href="imgrecord.html" style="margin-left: 15%;">
							<img src="img/history.png" alt="history" >
						</a>
					</div>
				</div> -->
				<!-- 选择部分 -->
				<div class="select-container">
                    <div class="grid-item">
                          <div class="sub-item">
                            <a href="" class="myLink" id="myLink1">
                                <div class="content-tiltle" id="InsSnow">雪  景</div>
                                <!-- <img src="img/+.png" alt=""> -->
                            </a>
                          </div>
                          <div class="sub-item">
                            <a href="" class="myLink" id="myLink2">
                                <div class="content-tiltle" id="InsDusk">夕阳余晖</div>
                            </a>
                          </div>
                          <div class="sub-item">
                            <a href="" class="myLink" id="myLink3">
                                <div class="content-tiltle" id="InsFilm">老电影</div>
                            </a>
                          </div>
                          <div class="sub-item">
                            <a href="" class="myLink" id="myLink4">
                                <div class="content-tiltle" id="InsWaterColor">水彩风</div>
                            </a>
                          </div>
                    </div>
                    <div class="grid-item">
                          <div class="sub-item">
                            <a href="" class="myLink" id="myLink5">
                                <div class="content-tiltle" id="I2IGhostXLAnimeCycleScifi">轻赛博科幻主题</div>
                            </a>
                          </div>
                          <div class="sub-item">
                            <a href="" class="myLink" id="myLink6">
                                <div class="content-tiltle" id="I2IGhostXLAnimeChinese">中国龙主题国风</div>
                            </a>
                          </div>
                          <div class="sub-item">
                            <a href="" class="myLink" id="myLink7">
                                <div class="content-tiltle" id="InsShuiMo">水墨幻境</div>
                            </a>
                          </div>
                          <div class="sub-item">
                            <a class="myLink" id="myLink8">
                                <div class="content-tiltle" id="I2IGuoFeng">水墨画风格</div>
                            </a>
                          </div>
                      </div>
                </div>
			</div>
		</div>
  </div>
</template>

<script setup>
import $ from 'jquery';
import { onMounted } from 'vue';
import { useRouter } from "vue-router";
import { useDrawStore } from "@/stores/drawStore.ts";
const router=useRouter()


  // ---------------------容器放置脚本--------------------

  $(document).ready(function() {
            // 为类名为 myLink 的链接添加点击事件处理程序
            $(".myLink").click(function(e) {
                // 阻止默认的链接跳转行为
                e.preventDefault();
                // 获取对应链接下的 .content-tiltle 元素的 id 内容
                var contentId = $(this).find('.content-tiltle').attr('id');
                // 执行相应的操作，例如将 id 传递到下一个页面
                console.log('链接的id内容是：', contentId);
                const drawStore=useDrawStore()
      drawStore.contentId=contentId
      
      router.push('/upload')
                // 跳转到下一个页面并将 id 作为 URL 参数传递
                // window.location.href = $(this).attr('href') + '?id=' + contentId;
            });
        });


  // $(document).ready(function () {
  //   // 为静态的父元素（container）添加事件委托
  //   $("#inner-container").on("click", "#myLink", function (e) {
  //     // 阻止默认的链接跳转行为
  //     e.preventDefault();
  //     // 获取点击按钮所在容器的 .content-tiltle 元素的 id 值
  //     var contentId = $(this)
  //       .closest(".main-content")
  //       .find(".content-tiltle")
  //       .attr("id");
  //     // 执行相应的操作，例如将 id 传递到下一个页面
  //     console.log("右侧按钮的id内容是：", contentId);
     
  //     // localStorage.setItem("contentId", contentId);

  //     // 跳转到下一个页面并将 id 作为 URL 参数传递
  //     // window.location.href = $(this).attr("href") + "?id=" + contentId;
  //   });
  // });




</script>

<style scoped>
@import url('@/assets/css/css_style/styles.css');
</style>