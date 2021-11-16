import { onMounted, onUnmounted, ref } from "vue";
// 已经废弃,改用了 vueuse 在 AppHeaderSticky.vue 中
export default function useScrollTop() {
  const scrollTop = ref(0);
  const scrollTopHandler = () => {
    // 获取距离页面 顶部的距离
    scrollTop.value = document.documentElement.scrollTop;
  };
  onMounted(() => {
    window.addEventListener("scroll", scrollTopHandler);
  });
  onUnmounted(() => {
    window.removeEventListener("scroll", scrollTopHandler);
  });
  return scrollTop;
}
