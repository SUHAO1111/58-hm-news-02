<template>
  <div class="hm-button" @click="clickFn">
    <slot></slot>
  </div>
</template>
<script>
export default {
  methods: {
    clickFn() {
      this.$emit("click");
    }
  }
};
</script>
<style lang="less" scoped>
.hm-button {
  margin: 20px;

  height: 50px;
  background-color: red;
  border-radius: 25px;
  text-align: center;
  line-height: 50px;
  color: white;
}
</style>
