import { createRouter, createWebHashHistory } from "vue-router";

const HomePage = () => import("@/views/home/HomePage");

const routes = [
  {
    path: "/",
    component: HomePage,
  },
  {
    path: "/category/:id",
    component: () =>
      import(
        /* webpackChunkName: "TopCategoryPage" */ "@/views/category/TopCategoryPage.vue"
      ),
  },
  {
    path: "/category/sub/:id",
    component: () =>
      import(
        /* webpackChunkName: "SubCategoryPage" */ "@/views/category/SubCategoryPage.vue"
      ),
  },
  {
    path: "/goods/:id",
    component: () =>
      import(
        /* webpackChunkName: "GoodsDetailPage" */ "@/views/goods/GoodsDetailPage.vue"
      ),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  // 路由切换
  scrollBehavior: () => {
    return { top: 0 };
  },
});

export default router;
