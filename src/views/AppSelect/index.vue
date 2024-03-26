<template>
  <div>
    <MyHeader :ifbtn="true"></MyHeader>
    <div class="background-container">
      <div class="background-image">
        <!-- 背景图片 -->
        <!-- <img
          src="@/assets/images/Page 2/img/background.png"
          alt=""
          style="
            position: absolute;
            object-fit: cover;
            width: 100%;
            height: 100%;
          "
        /> -->
        <img src="@/assets/images/step_one.png" alt="" style="
            position: absolute;
            object-fit: cover;
            width: 100%;
            height: 100%;
          " />

        <div class="menu-container">
          <!-- <div class="logo">
            <img
              src="@/assets/images/logo.png"
              alt="logo"
              style="height: 100%; width: 100%"
            />
          </div> -->
          <div class="box">
            <!-- <a href="index.html">
              <img src="@/assets/images/first-page.png" alt="first-page" />
            </a>
            <a href="imgrecord.html" style="margin-left: 15%">
              <img src="@/assets/images/history.png" alt="history" />
            </a> -->
          </div>
        </div>
        <!-- 选择部分 -->
        <div class="inner-container" id="inner-container">
          <!-- ------------------------------------------------ -->
          <div class="item" style="transform: translate(-50%, -50%)" id="item">
            <div class="main-content" id="1">
              <div class="target-select">
                <div class="content-tiltle" id="InsSnow">雪景</div>
                <div class="content-body">
                  充满魔幻光辉、冰冷风景的超现实风格
                </div>
              </div>
              <div class="in-link">
                <a href="upload.html" id="myLink">
                  <img src="@/assets/images/Page 2/img/in.png" alt="04" style="width: 100%; height: 100%" />
                </a>
              </div>
            </div>
          </div>
          <!-- ------------------------------------------------ -->
          <div class="item" style="transform: translate(-50%, -50%)" id="item">
            <div class="main-content" id="2">
              <div class="target-select">
                <div class="content-tiltle" id="InsDusk">夕阳余晖</div>
                <div class="content-body">与云霞辉映的梦幻光影场景</div>
              </div>
              <div class="in-link">
                <a href="upload.html" id="myLink">
                  <img src="@/assets/images/Page 2/img/in.png" alt="04" style="width: 100%; height: 100%" />
                </a>
              </div>
            </div>
          </div>
          <!-- ----------------------------------------------------- -->
          <div class="item" style="transform: translate(-50%, -50%)" id="item">
            <div class="main-content" id="3">
              <div class="target-select">
                <div class="content-tiltle" id="InsFilm">老电影</div>
                <div class="content-body">20世纪黑白老电影风格</div>
              </div>
              <div class="in-link">
                <a href="upload.html" id="myLink">
                  <img src="@/assets/images/Page 2/img/in.png" alt="04" style="width: 100%; height: 100%" />
                </a>
              </div>
            </div>
          </div>
          <!-- ------------------------------------------------------ -->
          <div class="item" style="transform: translate(-50%, -50%)" id="item">
            <div class="main-content" id="4">
              <div class="target-select">
                <div class="content-tiltle" id="InsWaterColor">水彩风</div>
                <div class="content-body">细致的水彩手绘风格</div>
              </div>
              <div class="in-link">
                <a href="upload.html" id="myLink">
                  <img src="@/assets/images/Page 2/img/in.png" alt="04" style="width: 100%; height: 100%" />
                </a>
              </div>
            </div>
          </div>
          <!-- -------------------------------------------------------- -->
          <div class="item" style="transform: translate(-50%, -50%)" id="item">
            <div class="main-content" id="5">
              <div class="target-select">
                <div class="content-tiltle" id="InsSnow">雪景</div>
                <div class="content-body">
                  充满魔幻光辉、冰冷风景的超现实风格
                </div>
              </div>
              <div class="in-link">
                <a href="upload.html" id="myLink">
                  <img src="@/assets/images/Page 2/img/in.png" alt="04" style="width: 100%; height: 100%" />
                </a>
              </div>
            </div>
          </div>
          <!-- --------------------------------------------------------- -->
          <div class="item" style="transform: translate(-50%, -50%)" id="item">
            <div class="main-content" id="6">
              <div class="target-select">
                <div class="content-tiltle" id="InsDusk">夕阳余晖</div>
                <div class="content-body">与云霞辉映的梦幻光影场景</div>
              </div>
              <div class="in-link">
                <a href="upload.html" id="myLink">
                  <img src="@/assets/images/Page 2/img/in.png" alt="04" style="width: 100%; height: 100%" />
                </a>
              </div>
            </div>
          </div>
          <!-- --------------------------------------------------------- -->
          <div class="item" style="transform: translate(-50%, -50%)" id="item">
            <div class="main-content" id="7">
              <div class="target-select">
                <div class="content-tiltle" id="InsFilm">老电影</div>
                <div class="content-body">20世纪黑白老电影风格</div>
              </div>
              <div class="in-link">
                <a href="upload.html" id="myLink">
                  <img src="@/assets/images/Page 2/img/in.png" alt="04" style="width: 100%; height: 100%" />
                </a>
              </div>
            </div>
          </div>
          <!-- --------------------------------------------------------- -->
          <div class="item" style="transform: translate(-50%, -50%)" id="item">
            <div class="main-content" id="8">
              <div class="target-select">
                <div class="content-tiltle" id="InsWaterColor">水彩风</div>
                <div class="content-body">细致的水彩手绘风格</div>
              </div>
              <div class="in-link">
                <a href="upload.html" id="myLink">
                  <img src="@/assets/images/Page 2/img/in.png" alt="04" style="width: 100%; height: 100%" />
                </a>
              </div>
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

onMounted(() => {
  // ---------------------容器放置脚本--------------------
  const outerRadius = 650; // 外圆半径
  const numItems = 8; // 项目数量
  const container = document.getElementById("inner-container");
  const items = container.children;
  const angleIncrement = (2 * Math.PI) / numItems; // 计算每个项目之间的角度增量
  for (let i = 0; i < numItems; i++) {
    const angle = i * angleIncrement; // 计算当前项目的角度
    const x = outerRadius * Math.cos(angle); // 计算 x 坐标
    const y = outerRadius * Math.sin(angle); // 计算 y 坐标
    items[i].style.left = `calc(50% + ${x}px)`; // 设置 x 坐标
    items[i].style.top = `calc(50% + ${y}px)`; // 设置 y 坐标

    // 添加点击事件监听器
    // items[i].addEventListener('click', function() {
    // 	alert(`Button ${i + 1} clicked`);
    // });
  }
  // ----------------------------旋转逻辑------------------------------
  document.addEventListener("DOMContentLoaded", function () {
    const container = document.getElementById("inner-container");
    let rotationAngle = 0; // 初始旋转角度
    let itemRotationAngle = 0; // 初始item旋转角度

    var currentId = 1;
    const targetcontainer = document.getElementById("1");
    targetcontainer.style.transform = "translate(-20%, -30%)";
    if (targetcontainer.querySelector(".content-body")) {
      targetcontainer.querySelector(".content-body").style.display = "block";
    }
    if (targetcontainer.querySelector(".in-link")) {
      targetcontainer.querySelector(".in-link").style.display = "block";
    }

    // 鼠标按下事件
    let startY;
    container.addEventListener("mousedown", function (event) {
      event.preventDefault();
      startY = event.clientY;
    });
    container.addEventListener("mouseup", function (event) {
      event.preventDefault();
      if (startY !== undefined) {
        const deltaY = event.clientY - startY;

        if (deltaY > 0) {
          currentId -= 1;
          if (currentId < 0) {
            currentId = 8;
          }
        } else {
          currentId += 1;
          if (currentId > 8) {
            currentId = 1;
          }
        }

        // console.log(currentId);
        const rotationAmount = deltaY > 0 ? 45 : -45; // 每次移动的旋转角度
        container.style.transform = `translate(-50%, -50%) rotate(${rotationAngle + rotationAmount
          }deg)`;
        rotationAngle += rotationAmount; // 更新旋转角度
        // 更新item的旋转角度
        const items = container.children;
        for (let i = 0; i < items.length; i++) {
          items[i].style.transform = `translate(-50%, -50%) rotate(${itemRotationAngle - rotationAmount
            }deg)`;
        }
        itemRotationAngle -= rotationAmount; // 更新item的旋转角度
        startY = event.clientY; // 更新鼠标位置
      }

      var containers = document.querySelectorAll(".main-content");
      // 遍历所有容器，根据id值显示或隐藏其子容器
      containers.forEach(function (container) {
        // 获取当前容器的id值
        var containerId = container.getAttribute("id");
        // console.log(containerId);
        // 如果当前容器的id与目标id相同，则显示其子容器，否则隐藏
        if (containerId == currentId) {
          container
            .querySelectorAll(".content-body, .in-link")
            .forEach(function (element) {
              element.style.display = "block";
            });
          container.style.transform = "translate(-20%, -30%)";
        } else {
          container
            .querySelectorAll(".content-body, .in-link")
            .forEach(function (element) {
              element.style.display = "none";
            });
          container.style.transform = "none";
        }
      });
    });
    // 鼠标离开事件
    container.addEventListener("mouseleave", function () {
      startY = undefined;
    });
  });



  document.addEventListener("DOMContentLoaded", function () {
    const containers = document.querySelectorAll(".item");

    function isElementInViewport(el) {
      const rect = el.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <=
        (window.innerWidth || document.documentElement.clientWidth)
      );
    }

    function checkVisibility() {
      containers.forEach(function (container) {
        if (isElementInViewport(container)) {
          container.style.opacity = "1"; // 元素在视口内，显示容器
        } else {
          container.style.opacity = "0"; // 元素不在视口内，隐藏容器
        }
      });
    }

    // 页面加载时检测一次可见性
    checkVisibility();

    // 定时器检测容器的可见性
    setInterval(checkVisibility, 100); // 每隔0.5秒检测一次
  });




  $(document).ready(function () {
    // 为静态的父元素（container）添加事件委托
    $("#inner-container").on("click", "#myLink", function (e) {
      // 阻止默认的链接跳转行为
      e.preventDefault();
      // 获取点击按钮所在容器的 .content-tiltle 元素的 id 值
      var contentId = $(this)
        .closest(".main-content")
        .find(".content-tiltle")
        .attr("id");
      // 执行相应的操作，例如将 id 传递到下一个页面
      console.log("右侧按钮的id内容是：", contentId);
      const drawStore=useDrawStore()
      drawStore.contentId=contentId
      
      router.push('/upload')
      // localStorage.setItem("contentId", contentId);

      // 跳转到下一个页面并将 id 作为 URL 参数传递
      // window.location.href = $(this).attr("href") + "?id=" + contentId;
    });
  });
})



</script>

<style scoped>
@import url('@/assets/css/css_style/styles.css');
</style>