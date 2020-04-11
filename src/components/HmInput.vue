<template>
  <div class="hm-input">
    <input
      :type="type"
      :placeholder="placeholder"
      :value="value"
      @input="inputFn"
      :rule="rule"
      message="message"
      :class="{success:status==='success',error:status==='error'}"
    >
    <div class="tips" v-show="status==='error'">{{message}}</div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      status: ''
    }
  },
  // props: ['type', 'placeholder']
  props: {
    type: {
      type: String,
      default: 'text'
    },
    placeholder: {
      type: String,
      default: '请输入...'
    },
    value: String,
    rule: RegExp,
    message: String
  },
  methods: {
    inputFn(e) {
      let value = e.target.value
      this.$emit('input', value)
      this.validata(value)
    },
    validata(value) {
      if (this.rule) {
        if (this.rule.test(value)) {
          this.status = 'success'
          return true
        } else {
          this.status = 'error'
          return false
        }
      }
    }
  }
}
</script>
<style lang="less" scoped>
.hm-input {
  height: 50px;
  margin: 0 10px;
  input {
    height: 30px;
    outline: none;
    border: none;
    border-bottom: 1px solid #ccc;
    width: 100%;
    line-height: 30px;
    font-size: 16px;
    color: #333;
    &.success {
      border-color: green;
    }
    &.error {
      border-color: red;
    }
  }

  .tips {
    color: red;
    font-size: 12px;
    height: 20px;
    line-height: 20px;
  }
}
</style>
