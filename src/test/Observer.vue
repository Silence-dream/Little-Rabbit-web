<template>
  <div ref="target">芜湖!</div>
</template>

<script>
import { useIntersectionObserver } from "@vueuse/core";
import { ref } from "vue";
export default {
  name: "Observer",
  setup() {
    //  监听的元素
    const target = ref(null);
    useIntersectionObserver(
      // 监听的元素
      target,
      // isIntersecting 布尔类型 true 元素进入可视区 false 元素离开可视区
      // observerElement 被监听的元素
      ([{ isIntersecting }], observerElement) => {
        console.log(isIntersecting);
        console.log(observerElement);
        console.log("监听到了");
      }
    );
    return { target };
  },
};
</script>
