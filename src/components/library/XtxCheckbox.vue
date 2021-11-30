<template>
  <!--  复选框组件-->
  <div className="xtx-checkbox" @click="toggle">
    <i className="iconfont icon-checked" v-if="isChecked"></i>
    <i className="iconfont icon-unchecked" v-else></i>
    <span></span>
  </div>
</template>
<script>
import { ref, watch } from "vue";
export default {
  name: "XtxCheckbox",
  props: {
    modelValue: {
      type: Boolean,
      default: false,
    },
  },
  setup(props, { emit }) {
    // 控制复选框是否选中
    const isChecked = ref(false);
    // 更改复选框状态
    function toggle() {
      isChecked.value = !isChecked.value;
      // 给父组件传值
      emit("update:modelValue", isChecked.value);
    }
    // 监听 modelValue 值的变化
    watch(
      () => props.modelValue,
      () => {
        // 当值发生变化以后 将值赋值给 isChecked
        // 因为在当前组件中我们是通过 isChecked 来控制模板状态的
        isChecked.value = props.modelValue;
      }
    );
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
