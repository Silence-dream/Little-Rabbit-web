<template>
  <!--  复选框组件-->
  <div className="xtx-checkbox" @click="toggle">
    <i className="iconfont icon-checked" v-if="isChecked"></i>
    <i className="iconfont icon-unchecked" v-else></i>
    <span><slot></slot></span>
  </div>
</template>
<script>
import { useVModel } from "@vueuse/core";
export default {
  name: "XtxCheckbox",
  props: {
    modelValue: {
      type: Boolean,
      default: false,
    },
  },
  setup(props, { emit }) {
    // useVModel 实现双向数据绑定
    // 将 props 中的 modelValue 实现双向数据绑定
    // useModel 的返回值是一个新的响应式数据, 可以在当前模板中直接使用
    const isChecked = useVModel(props, "modelValue", emit);
    // 修改复选框选中状态
    const toggle = () => {
      isChecked.value = !isChecked.value;
    };
    return {
      isChecked,
      toggle,
    };
  },
};
</script>
<style lang="less" scoped>
.xtx-checkbox {
  display: inline-block;
  margin-right: 2px;

  .icon-checked {
    color: @xtxColor;

    ~ span {
      color: @xtxColor;
    }
  }

  i {
    position: relative;
    top: 1px;
  }

  span {
    margin-left: 2px;
  }
}
</style>
