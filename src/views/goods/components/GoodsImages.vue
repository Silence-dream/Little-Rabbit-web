<template>
  <div class="goods-image">
    <!-- 放大镜组件  -->
    <div
      class="large"
      :style="{
        backgroundImage: `url(${images[current]})`,
        backgroundPositionX: bgPosition.x + 'px',
        backgroundPositionY: bgPosition.y + 'px',
      }"
      v-show="show"
    ></div>
    <div class="middle" ref="middleElement">
      <!-- 放大镜镜片  -->
      <div
        class="layer"
        v-show="show"
        :style="{
          left: layerPostions.left + 'px',
          top: layerPostions.top + 'px',
        }"
      ></div>
      <img :src="images[current]" alt="" />
    </div>
    <ul class="small">
      <li
        :class="index === current ? 'active' : ''"
        v-for="(item, index) in images"
        :key="item"
        @mouseenter="current = index"
      >
        <img :src="item" alt="" />
      </li>
    </ul>
  </div>
</template>
<script>
import { ref, watch } from "vue";
import { useMouseInElement } from "@vueuse/core";

export default {
  name: "GoodsImages",
  props: {
    images: {
      type: Array,
      default: () => [],
    },
  },
  setup() {
    // 当前图片的索引
    let current = ref(0);
    // 控制镜片和大图的显示
    let show = ref(false);
    // 获取鼠标进入显示镜片和大图的元素
    let middleElement = ref(null);
    // 镜片位置控制
    let layerPostions = ref({ left: 0, top: 0 });
    // 用于放大镜组件控制大图位置
    const bgPosition = ref({ x: 0, y: 0 });
    // 获取鼠标和元素之间的位置关系
    const { isOutside, elementX, elementY } = useMouseInElement(middleElement);
    watch([isOutside, elementX, elementY], () => {
      if (isOutside.value) {
        // 鼠标在外面
        show.value = false;
      } else {
        show.value = true;
        layerPostions.value = {
          left: elementX.value - 100,
          top: elementY.value - 100,
        };
      }
      // 控制镜片溢出
      if (layerPostions.value.left < 0) {
        layerPostions.value.left = 0;
      }
      if (layerPostions.value.left > 200) {
        layerPostions.value.left = 200;
      }
      if (layerPostions.value.top < 0) {
        layerPostions.value.top = 0;
      }
      if (layerPostions.value.top > 200) {
        layerPostions.value.top = 200;
      }
      // 设置背景大图位置
      bgPosition.value = {
        x: -layerPostions.value.left * 2,
        y: -layerPostions.value.top * 2,
      };
    });
    return {
      current,
      show,
      middleElement,
      layerPostions,
      bgPosition,
    };
  },
};
</script>
<style scoped lang="less">
.goods-image {
  width: 480px;
  height: 400px;
  position: relative;
  display: flex;
  z-index: 500;
  .large {
    position: absolute;
    top: 0;
    left: 412px;
    width: 400px;
    height: 400px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    background-repeat: no-repeat;
    background-size: 800px 800px;
    background-color: #f8f8f8;
  }
  .middle {
    width: 400px;
    height: 400px;
    background: #f5f5f5;
    position: relative;
    cursor: move;
    .layer {
      width: 200px;
      height: 200px;
      background: rgba(0, 0, 0, 0.2);
      left: 0;
      top: 0;
      position: absolute;
    }
  }
  .small {
    width: 80px;
    li {
      width: 68px;
      height: 68px;
      margin-left: 12px;
      margin-bottom: 15px;
      cursor: pointer;
      &:hover,
      &.active {
        border: 2px solid @xtxColor;
      }
    }
  }
}
</style>
