import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "normalize.css";
import "@/assets/styles/common.less";
// 加载动画
import library from "@/components/library";

createApp(App).use(store).use(router).use(library).mount("#app");
