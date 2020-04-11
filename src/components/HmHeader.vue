<template>
  <div class="hm-header">
    <span class="left iconfont iconjiantou2" @click="$router.go(-1)"></span>
    <div class="center">
      <slot></slot>
    </div>
    <span class="right"></span>
  </div>
</template>
<script>
export default {};
</script>
<style lang="less" scoped>
.hm-header {
  height: 40px;
  line-height: 40px;
  border-bottom: 1px solid #ccc;
  text-align: center;
  display: flex;
  .left,
  .right {
    width: 30px;
  }
  .center {
    flex: 1;
    font-weight: 700;
  }
}
</style>
