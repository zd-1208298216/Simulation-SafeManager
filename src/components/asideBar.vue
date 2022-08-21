<template>
  <div class="aside-container">
    <div class="left-menu">
      <el-menu
        router
        :default-active="$route.path"
        @open="handleOpen"
        @close="handleClose"
        background-color="#506275"
        text-color="#fff"
        active-text-color="#94d6da"
      >
        <!-- 左侧导航栏抽取循环部分 将路由列表传给子组件-->
        <asideBarItem
          v-for="router in routers"
          :router="router"
          :key="router.path"
        >
        </asideBarItem>
      </el-menu>
      <!-- <el-menu
        default-active="2"
        class="el-menu-vertical-demo"
        background-color="#1c2b3b"
        text-color="#fff"
        active-text-color="#ffd04b"
        router
      >
        <el-submenu index="1">
          <template slot="title">
            <i class="el-icon-user-solid" style="margin-left: -20px"></i>
            <span>数字货币支付</span>
          </template>
          <el-submenu index="1-1">
            <template slot="title">运营管理类</template>
            <el-menu-item index="1-1-1">选项1</el-menu-item>
          </el-submenu>
          <el-submenu index="1-2">
            <template slot="title">业务查询类</template>
            <el-menu-item index="1-2-1">选项1</el-menu-item>
          </el-submenu>
          <el-submenu index="1-3">
            <template slot="title">清算对账类</template>
            <el-menu-item index="1-3-1">选项1</el-menu-item>
          </el-submenu>
          <el-submenu index="1-4">
            <template slot="title">业务管理类</template>
            <el-menu-item index="1-4-1">选项1</el-menu-item>
          </el-submenu>
        </el-submenu>
        <el-submenu index="2">
          <template slot="title">
            <i class="el-icon-user-solid" style="margin-left: -20px"></i>
            <span>用户管理</span>
          </template>
          <el-menu-item index="/user"> 用户列表</el-menu-item>
          <el-menu-item index="2-2"> 角色列表</el-menu-item>
          <el-menu-item index="2-3"> 密码修改</el-menu-item>
        </el-submenu>
      </el-menu> -->
    </div>
  </div>
</template>

<script>
import asideBarItem from "./asideBarItem";
export default {
  name: "asideBar",
  components: {
    asideBarItem,
  },
  data() {
    return {};
  },
  computed: {
    routers() {
      return this.$router.options.routes[1].children;
    },
  },
  methods: {
    handleOpen(key, keyPath) {
      //点击打开时当前的路径
      //console.log(key, keyPath, 'handleOpen');
    },
    handleClose(key, keyPath) {
      //console.log(key, keyPath, 'handleClose');
    },
  },
  created() {},
};
</script>

<style scoped>
.el-menu-item.is-active {
  background-color: #04bebd !important;
}
</style>