import { ref } from "vue";
import { useIntersectionObserver } from "@vueuse/core";

export default function useLazyData(apiFuntion) {
  // 监听的元素
  let target = ref(null);
  // 存储请求发来的数据
  let result = ref();
  let { stop } = useIntersectionObserver(
    target,
    ([{ isIntersecting }]) => {
      // 进入可视区
      if (isIntersecting) {
        // 停止监听
        stop();
        //  发送请求
        apiFuntion().then((data) => {
          // 保存数据
          result.value = data.result;
        });
      }
    },
    {
      // 阈值
      threshold: 0,
    }
  );
  return { target, result };
}
