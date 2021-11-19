<template>
  <!-- 人气推荐组件  -->
  <HomePanel title="人气推荐" sub-title="人气爆款 不容错过">
    <ul class="goods-list">
      <!-- 测试代码  -->
      <!--      <li>-->
      <!--        <RouterLink to="/">-->
      <!--          <img-->
      <!--            src="https://yjy-oss-files.oss-cn-zhangjiakou.aliyuncs.com/tuxian/popular_1.jpg"-->
      <!--            alt=""-->
      <!--          />-->
      <!--          <p class="name">特惠推荐</p>-->
      <!--          <p class="desc">它们最实惠</p>-->
      <!--        </RouterLink>-->
      <!--      </li>-->
      <li v-for="item in homeHot" :key="item.id">
        <RouterLink to="/">
          <img :src="item.picture" alt="" />
          <p class="name">{{ item.title }}</p>
          <p class="desc">{{ item.alt }}</p>
        </RouterLink>
      </li>
    </ul>
  </HomePanel>
</template>

<script>
import HomePanel from "@/views/home/components/HomePanel.vue";
export default {
  name: "HomeHot",
  components: { HomePanel },
};
</script>
<script setup>
import { ref } from "vue";
import { getHotGoods } from "@/api/home.js";
// 存储人气推荐数据
const homeHot = ref();
getHotGoods().then((res) => {
  homeHot.value = res.result;
});
</script>
<style scoped lang="less">
.goods-list {
  display: flex;
  justify-content: space-between;
  height: 426px;
  li {
    width: 306px;
    height: 406px;
    .hoverShadow();
    img {
      width: 306px;
      height: 306px;
    }
    p {
      font-size: 22px;
      padding-top: 12px;
      text-align: center;
    }
    .desc {
      color: #999;
      font-size: 18px;
    }
  }
}
</style>
