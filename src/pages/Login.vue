<template>
  <div class="login">
    <hm-header>登录</hm-header>
    <hm-logo></hm-logo>
    <hm-input
      type="text"
      placeholder="请输入用户名"
      v-model="username"
      :rule="/^1\d{4,10}$/"
      message="用户名不正确"
      ref="username"
    ></hm-input>
    <hm-input
      type="password"
      placeholder="请输入密码"
      v-model="password"
      :rule="/^\d{3,12}$/"
      message="密码格式错误"
      ref="password"
    ></hm-input>
    <hm-button @click="login">登录</hm-button>
  </div>
</template>
<script>
// import axios from 'axios'
export default {
  data() {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    login() {
      const result1 = this.$refs.username.validata(this.username)
      const result2 = this.$refs.password.validata(this.password)
      if (!result1 || !result2) {
        return
      }
      // console.log('登录')
      this.$axios({
        url: '/login',
        method: 'post',
        data: {
          username: this.username,
          password: this.password
        }
      }).then(res => {
        console.log(res)
        if (res.data.statusCode === 200) {
          this.$toast.success('登录成功')
          this.$router.push('/user')
        } else {
          this.$toast.fail('用户名或密码错误')
        }
      })
    }
  }
}
</script>
<style lang="less" scoped>
</style>
