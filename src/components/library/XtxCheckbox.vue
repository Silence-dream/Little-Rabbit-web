<template>
  <!--  复选框组件-->
  <div className="xtx-checkbox" @click="toggle">
    <i className="iconfont icon-checked" v-if="isChecked"></i>
    <i className="iconfont icon-unchecked" v-else></i>
    <span></span>
  </div>
</template>
<script>
import { ref } from "vue-demi";
export default {
  name: "XtxCheckbox",
  setup() {
    // 控制复选框是否选中
    const isChecked = ref(false);
    // 更改复选框状态
    function toggle() {
      isChecked.value = !isChecked.value;
    }
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
