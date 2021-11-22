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
      /*
       * 设置元素进入可视区的临界值，让元素只要进入可视区就进行数据懒加载
       * 如果被监听元素的大小小于可视区大小时, 只要元素一进入可视区就可以被监听到.
       * 如果被监听元素的大小大于可视区的大小, 元素大小和可视区大小之间会有一个相交比例, 只有达到这个相交比例时, 元素才算真正进入可视区. 比如我们可以设置当元素进入可视区的 20% 时, 元素才算进入可视区
       * 可以通过 `threshold` 配置项更改这个默认行为, 0 表示只要元素进入可视区, 就被监听到
       * */
      threshold: 0,
    }
  );
  return { target, result };
}
