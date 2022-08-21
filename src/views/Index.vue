<template>
  <el-container 
    class="index"
    :style="'width:' + index_width + 'px;height:' + index_height + 'px'"
  >
    <el-header>
      <div class="nav-header">
        <!-- <img src="../assets/agreeLogo.png" class="logo" /> -->
        <div class="logo">
          <img src="../assets/github.png">
          Vue project
        </div>
        <div class="message">
          <span style="font-weight: bold">AWEB&nbsp;5.0:</span
          >&nbsp;&nbsp;欢迎使用
        </div>
        <div
          class="quit"
          @mouseenter="quit = true"
          @mouseleave="quit = false"
          @click="exit()"
        >
          登录
        </div>
      </div>
    </el-header>
    <el-container>
      <el-aside width="200px">
        <!-- 左侧导航 -->
        <asideBar></asideBar>
      </el-aside>
      <el-main>
        <el-breadcrumb separator-class="el-icon-arrow-right">
          <el-breadcrumb-item v-for="item in levelList" :key="item.path">
            {{ item.name }}
          </el-breadcrumb-item>
        </el-breadcrumb>
        <appMain class="appMain"></appMain>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import asideBar from "../components/asideBar";
import appMain from "../components/appMain";

export default {
  name: "index",
  components: {
    asideBar,
    appMain,
  },
  data() {
    return {
      levelList: null,
      index_width: "1920",
      index_height: "1080",
    };
  },
  created() {
    this.getBreadcrumb();
  },
  mounted(){
    this.handleRize();
    window.onresize = () => {
      this.updateScreanSize();
      this.handleRize();
    };
  },
  watch: {
    $route: "getBreadcrumb",
  },
  methods: {
    exit() {
      this.$router.push({ name: "login" });
    },
    handleRize() {
      this.index_width =
        document.body.clientWidth > 1200 ? document.body.clientWidth : 1200;
      this.index_height = (this.index_width * 1080) / 1920;
      this.$forceUpdate();
    },
    getBreadcrumb() {
      //$route.matched一个数组 包含当前路由的所有嵌套路径片段的路由记录
      let matched = this.$route.matched.filter((item) => item.name);
      this.levelList = matched;
      console.log('121212',this.levelList)
    },
  },
};
</script>

<style scoped>
.index {
  height: 100%;
  width: 100%;
}
.el-menu-item.is-active {
  background-color: #04bebd !important;
}
.el-aside {
  height: 100%;
  background-color: #506275;
}
.el-header {
  height: 60px;
  background-color: #7f8797;
  color: #333;
  text-align: center;
  line-height: 60px;
}
.nav-header {
  position: relative;
  height: 100%;
  width: 100%;
}
.logo {
  position: absolute;
  text-align: center;
  color: #fff;
  cursor: pointer;
  top: 50%;
  left: 10px;
  transform: translateY(-50%);
}
.logo img{
  width: 28px;
  height: 28px;
  border-radius: 50%;
  color: #fff;
  vertical-align: middle;
}
.message {
  position: absolute;
  width: 200px;
  top: 50%;
  right: 100px;
  transform: translateY(-50%);
}
.quit {
  float: right;
  cursor: pointer;
}
.quit:hover {
  color: rgb(88, 57, 201);
  float: right;
  cursor: pointer;
}
.el-breadcrumb {
  height: 40px;
  line-height: 40px;
  background-color: rgb(213, 221, 221);
  margin-top: -5px;
  text-indent: 2px;
}
.el-main {
  padding: 10px;
}
/* .appMain{
    margin-top: -8px !important;
  } */
</style>
