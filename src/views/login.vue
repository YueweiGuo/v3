<template>
  <el-row justify="center" align="middle" class="login">
    <el-col :span="6">
      <el-form ref="formRef" label-width="120px">
        <el-form-item label="賬號">
          <el-input v-model="name"></el-input>
        </el-form-item>
        <el-form-item label="密碼">
          <el-input v-model="password"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">登入</el-button>
        </el-form-item>
      </el-form>
    </el-col>
  </el-row>
</template>

<script>
import { setToken } from '@/utils/user'
export default {
  name: 'Login',
  data() {
    return {
      name: '',
      password: ''
    }
  },
  methods: {
    onSubmit() {
      const { name, password } = this
      if (!name || !password) return this.$message({ message: '信息填寫不完整', type: 'warning' })
      setToken(1)
      this.$router.replace('/')
    }
  }
}
</script>

<style scoped>
.login {
  height: 100vh;
}
</style>
