<template>
  <div class="login">
    <div class="container">
      <img src="../assets/agreeLogo.png" class="logo">
      <div class="information">
        <div class="logo-item">数字货币管理系统</div>
        <el-form :model="information" class="form" :rules="rules">
          <el-form-item prop="username">
            <el-input v-model="information.username" class="username" prefix-icon='el-icon-user' placeholder="用户/Username"></el-input>
          </el-form-item>
          <el-form-item prop="password">
            <el-input v-model="information.password" class="password" prefix-icon='el-icon-lock' placeholder="密码/Password" show-password></el-input>
          </el-form-item>
          <button class="login_btn" @click.prevent="login">登录/Login</button>
          <vcode :show="isShow" @success="onSuccess" @close="onClose" @fail="onfail"/>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
import vcode from "vue-puzzle-vcode";
export default {
  name: 'login',
  components: {
    vcode
  },
  data(){
    return{
      information:{
        username:'',
        password:'',
      },
      isShow: false, // 验证码模态框是否出现
      key: 0, //开关
      rules:{
        username:[
          { required: true, message: '请输入用户名', trigger: 'blur' },
        ],
        password:[
          { required: true, message: '请输入密码', trigger: 'blur' },
        ]
      }
    }
  },
  methods: {
    login(){
      this.onSubmit();
      if (this.key == 1) {
        this.$router.push('/index');
      }
    },
    onSubmit() {
      this.isShow = true;
    },
    // 用户通过了验证
    onSuccess(msg) {
      console.log('121212');
      this.isShow = false; // 通过验证后，需要手动隐藏模态框
      this.key = 1;
      this.login();
    },
    onfail(){
      this.isShow = false;
      this.$message.error('验证失败，请重新验证！')
    },
    // 用户点击遮罩层，应该关闭模态框
    onClose() {
      this.isShow = false;
    }
  }
}
</script>

<style scoped>
  .login{
    width: 100%;
    height: 100%;
    background: url("../assets/loginBg.jpg") no-repeat center center;
    background-size: 100% 100%;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .container{
    position: relative;
    width: 400px;
    margin: auto;
    background-color: white;
    border-radius: 10px;
  }
  .logo{
    width: 220px;
    height: 50px;
    position: absolute;
    left: 50%;
    top: 25px;
    transform: translateX(-50%);
  }
  .information{
    height: 400px;
    width: 320px;
    margin: auto;
    top: 90px;
    position: relative;
  }
  .logo-item{
    color: rgb(166, 166, 166);
    font-size: 30px;
    text-align: center;
    margin-bottom: 10px;
  }
  .form{
    width: 90%;
    height: 80%;
    margin: auto;
  }
  .username{
    border-width: 1px;
    border-color: #cccccc;
    border-radius: 8px;
    border-style: solid;
    margin-top: 20px;
  }
  ::v-deep input::-webkit-input-placeholder {
    color: #c0c4cc;
    text-indent: 20px;
    letter-spacing: 1.5px;
  }
  .password{
    border-width: 1px;
    border-color: #cccccc;
    border-radius: 8px;
    border-style: solid;
    margin-top: 8px;
  }
  .login_btn{
    width: 100%;
    height: 14%;
    margin-top: 12px;
    color: white;
    border: none;
    background-color: #00a4af;
    cursor: pointer;
  }
  .el-input{
    border: none !important;
  }
</style>
