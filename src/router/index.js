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
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
