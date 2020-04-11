<template>
  <div class="register">
    <hm-header>注册</hm-header>
    <hm-logo></hm-logo>
    <hm-input
      placeholder="用户名/手机号码"
      v-model="username"
      :rule="/^1\d{4,10}$/"
      message="用户名格式不对"
      ref="username"
    ></hm-input>
    <hm-input
      placeholder="昵称"
      v-model="nickname"
      :rule="/^[\u4e00-\u9fa5]{3,7}$/"
      message="昵称必须是3-7为中文"
      ref="nickname"
    ></hm-input>
    <hm-input
      placeholder="密码"
      v-model="password"
      message="密码格式错误"
      :rule="/^\d{3,12}$/"
      ref="password"
    ></hm-input>
    <hm-button @click="register">注册</hm-button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      username: '',
      password: '',
      nickname: ''
    }
  },
  methods: {
    register() {
      // console.log('注册')
      const status1 = this.$refs.username.validata(this.username)
      const status2 = this.$refs.password.validata(this.password)
      const status3 = this.$refs.nickname.validata(this.nickname)
      if (!status1 || !status2 || !status3) {
        return
      }
      this.$axios({
        url: '/register',
        method: 'post',
        data: {
          username: this.username,
          password: this.password,
          nickname: this.nickname
        }
      }).then(res => {
        console.log(res.data)
        if (res.data.statusCode === 200) {
          this.$toast.success(res.data.message)
          this.$router.push({
            name: 'login',
            params: {
              username: this.username,
              password: this.password
            }
          })
        } else {
          this.$toast.fail(res.data.message)
        }
      })
    }
  }
}
</script>
<style lang="less" scoped>
</style>
