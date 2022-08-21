<template>
  <div class="nav">
    <img src="../assets/agreeLogo.png" class="logo" />
    <div class="new-message">123123123</div>
    <div class="message">
      <span style="font-weight: bold">AWEB&nbsp;5.0:</span>&nbsp;&nbsp;欢迎使用
    </div>
    <div
      class="quit"
      @mouseenter="quit = true"
      @mouseleave="quit = false"
      @click="exit()"
    >
      退出登录
      <!-- <div class="drop-down" v-show="quit">退出登录</div> -->
    </div>
  </div>
</template>

<script>
export default {
  name: "nav-header",
  data() {
    return {
      quit: true,
    };
  },
  methods: {
    exit() {
      this.$router.push({ name: "login" });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.nav {
  height: 70px;
  position: relative;
  background-color: #c4a7a7;
  border-bottom: 1px solid #ccc;
  box-shadow: 0 1px 6px rgba(0, 0, 0, 0.25);
  .logo {
    width: 152px;
    height: 38px;
    position: absolute;
    top: 10px;
    left: 10px;
  }
  .new-message{
    height: 10px;
    width: 10px;
    background-color: aqua;
  }
  .message {
    position: absolute;
    width: 200px;
    top: 20px;
    right: 200px;
  }
  .quit {
    float: right;
    margin-right: 20px;
    margin-top: 20px;
    cursor: pointer;
  }
  .quit:hover {
    color: springgreen;
    float: right;
    margin-right: 20px;
    margin-top: 20px;
    cursor: pointer;
  }
  .drop-down {
    position: absolute;
    top: 50px;
    right: 35px;
    height: 40px;
    width: 100px;
    background-color: white;
    z-index: 999;
    border: 1px solid rgb(194, 179, 179);
    border-radius: 8px;
    box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.3);
  }
}
</style>
