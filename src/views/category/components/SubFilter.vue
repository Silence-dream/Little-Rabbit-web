<template>
  <!-- 筛选区 -->
  <div v-if="filters" class="sub-filter">
    <div class="item">
      <div class="head">品牌：</div>
      <div class="body">
        <a v-for="brand in filters.brands" :key="brand.id">{{ brand.name }}</a>
      </div>
    </div>
    <div v-for="item in filters.saleProperties" :key="item.id" class="item">
      <div class="head">{{ item.name }}：</div>
      <div class="body">
        <a v-for="property in item.properties" :key="property.id">{{
          property.name
        }}</a>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "SubFilter",
};
</script>
<script setup>
// 获取筛选id

import { useRoute } from "vue-router";
import { ref } from "vue";
import { getSubCategoryFilters } from "@/api/category.js";

// 获取路由信息对象
const route = useRoute();
// 用于存储所有筛选条件数据
const filters = ref(null);
console.log(filters);
getSubCategoryFilters(route.params.id).then((res) => {
  // 在品牌筛选条件的前面加上 `全部` 筛选选项
  res.result.brands.unshift({ id: null, name: "全部" });
  // 在其他筛选条件的前面加上 `全部` 筛选选项
  res.result.saleProperties.forEach((item) =>
    item.properties.unshift({ id: null, name: "全部" })
  );
  filters.value = res.result;
});
console.log(filters);
</script>
<style lang="less" scoped>
// 筛选区
.sub-filter {
  background: #fff;
  padding: 25px;

  .item {
    display: flex;
    line-height: 40px;

    .head {
      width: 80px;
      color: #999;
    }

    .body {
      flex: 1;

      a {
        margin-right: 36px;
        transition: all 0.3s;
        display: inline-block;

        &.active,
        &:hover {
          color: @xtxColor;
        }
      }
    }
  }
}
</style>
