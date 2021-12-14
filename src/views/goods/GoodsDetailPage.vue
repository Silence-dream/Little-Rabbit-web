<template>
  <AppLayout>
    <div class="xtx-goods-page">
      <div class="container">
        <!-- 面包屑 -->
        <XtxBread>
          <XtxBreadItem path="/">首页</XtxBreadItem>
          <XtxBreadItem>
            {{ goodsDetail?.categories[1].name }}
          </XtxBreadItem>
          <XtxBreadItem path="/">
            {{ goodsDetail?.categories[0].name }}
          </XtxBreadItem>
          <XtxBreadItem path="/">
            {{ goodsDetail?.name }}
          </XtxBreadItem>
        </XtxBread>
        <!-- 商品信息 -->
        <div class="goods-info">
          <!-- 左侧 -->
          <div class="media">
            <GoodsImages :images="goodsDetail?.mainPictures" />
            <!-- 商品售卖组件 -->
            <GoodsSales />
          </div>
          <!-- 右侧 -->
          <div class="spec">
            <GoodsInfo :goods="goodsDetail" />
          </div>
        </div>
        <!-- 商品推荐 -->
        <GoodsRelevant></GoodsRelevant>
        <!-- 商品详情 -->
        <div class="goods-footer">
          <div class="goods-article">
            <!-- 商品+评价 -->
            <div class="goods-tabs"></div>
            <!-- 注意事项 -->
            <div class="goods-warn"></div>
          </div>
          <!-- 24热榜 -->
          <div class="goods-aside"></div>
        </div>
      </div>
    </div>
  </AppLayout>
</template>

<script>
import { useRoute } from "vue-router";
import { ref } from "vue";
import { getGoodsDetail } from "@/api/goods.js";
import GoodsRelevant from "@/views/goods/components/GoodsRelevant.vue";
import AppLayout from "@/components/AppLayout.vue";
import GoodsImages from "@/views/goods/components/GoodsImages.vue";
import GoodsSales from "@/views/goods/components/GoodsSales.vue";
import GoodsInfo from "@/views/goods/components/GoodsInfo.vue";

export default {
  name: "GoodsDetailPage",
  components: { GoodsImages, GoodsRelevant, AppLayout, GoodsSales, GoodsInfo },
  setup() {
    // 获取商品详情数据以及获取商品详情数据的方法
    const { goodsDetail, getData } = useGoodsDetail();
    // 获取路由信息对象
    const route = useRoute();
    // 发送请求获取商品详情信息
    getData(route.params.id);
    return {
      getData,
      goodsDetail,
    };
  },
};
// 用于获取商品详细信息的方法
function useGoodsDetail() {
  // 用于存储商品详情信息
  const goodsDetail = ref();
  // 用于获取商品详情信息的方法
  const getData = (id) => {
    // 向服务器端发送请求获取商品详情信息
    getGoodsDetail(id).then((data) => {
      // 用于存储商品详情信息
      goodsDetail.value = data.result;
    });
  };
  // 返回商品详情数据和获取商品详情数据的方法
  return { goodsDetail, getData };
}
</script>

<style scoped lang="less">
.goods-info {
  min-height: 600px;
  background: #fff;
  display: flex;
  .media {
    width: 580px;
    height: 600px;
    padding: 30px 50px;
  }
  .spec {
    flex: 1;
    padding: 30px 30px 30px 0;
  }
}
.goods-footer {
  display: flex;
  margin-top: 20px;
  .goods-article {
    width: 940px;
    margin-right: 20px;
  }
  .goods-aside {
    width: 280px;
    min-height: 1000px;
  }
}
.goods-tabs {
  min-height: 600px;
  background: #fff;
}
.goods-warn {
  min-height: 600px;
  background: #fff;
  margin-top: 20px;
}
</style>
