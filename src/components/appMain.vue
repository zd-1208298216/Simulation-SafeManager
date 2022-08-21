<template>
  <div class="appMain-container">
    <div class="home-page" v-if="homepage">
      <el-row>
        <el-col :span="6">
          <div class="wrap">
            <div class="grid-content bg-purple">
              <ICountUp :endVal="endVal1" :duration="5000" @ready="onReady" />
              <div class="text">Total Visitors</div>
            </div>
            <i class="el-icon-s-custom"></i>
          </div>
        </el-col>

        <el-col :span="6">
          <div class="wrap">
            <div class="grid-content bg-purple">
              <ICountUp :endVal="endVal2" :duration="3000" @ready="onReady" />
              <div class="text">Messages</div>
            </div>
            <i class="el-icon-chat-dot-square"></i>
          </div>
        </el-col>

        <el-col :span="6">
          <div class="wrap">
            <div class="grid-content bg-purple">
              <ICountUp :endVal="endVal3" :duration="2000" @ready="onReady" />
              <div class="text">Total Order Placeed</div>
            </div>
            <i class="el-icon-shopping-cart-2"></i>
          </div>
        </el-col>

        <el-col :span="6">
          <div class="wrap">
            <div class="grid-content bg-purple">
              <ICountUp :endVal="endVal4" :duration="6000" @ready="onReady" />
              <div class="text">Total Profit</div>
            </div>
            <i class="el-icon-wallet"></i>
          </div>
        </el-col>
      </el-row>

      <!-- Echarts -->
      <div class="linecharts">
        <linecharts />
      </div>
      <div class="pie">
        <pie />
      </div>
      <div class="earth">
        <earth />
      </div>
    </div>
    <router-view v-else></router-view>
  </div>
</template>
 
<script>
import ICountUp from "vue-count-to";
import linecharts from "../components/HomeEcharts/Linecharts.vue";
import pie from "../components/HomeEcharts/Pie";
import earth from "../components/HomeEcharts/earth";
export default {
  name: "appMain",
  components: {
    ICountUp,
    linecharts,
    pie,
    earth,
  },
  data() {
    return {
      homepage: false,
      endVal1: 67810,
      endVal2: 330,
      endVal3: 492,
      endVal4: 85045,
    };
  },
  computed: {},
  watch: {
    $route: {
      handler(nv, ov) {
        if (this.$route.path == "/index") {
          this.homepage = true;
        } else {
          this.homepage = false;
        }
      },
    },
    deep: true,
  },
  methods: {
    onReady: function (instance, CountUp) {
      const that = this;
      instance.update(that.endVal + 100);
    },
  },
  created() {
    if (this.$route.path == "/index") {
      this.homepage = true;
    } else {
      this.homepage = false;
    }
  },
  mounted() {},
};
</script>
 
 <style scoped>
.el-row {
  margin-bottom: 20px;
  margin-left: -12px;
  margin-right: -12px;
  padding: 12px;
}
.el-col i {
  font-size: 60px;
}
.appMain-container {
  overflow: auto;
  margin-top: 15px;
  /* height: 92%; */
  background-color: rgb(252, 247, 247);
}
.home-page {
  background-color: aqua;
  overflow-y: auto;
  overflow-x: hidden;
  width: 90%;
  height: 600px;
  background: rgb(240, 243, 244);
  box-shadow: none;
  font-size: 20px;
  margin-top: 10px;
  margin: auto;
  color: #4d63bc;
  font-weight: 300;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.2);
}
.home-page::-webkit-scrollbar {
  /*滚动条整体样式*/
  width: 4px; /*高宽分别对应横竖滚动条的尺寸*/
  height: 4px;
}
.home-page::-webkit-scrollbar-thumb {
  /*滚动条里面小方块*/
  border-radius: 5px;
  -webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
  background: rgba(0, 0, 0, 0.2);
}
.home-page::-webkit-scrollbar-track {
  /*滚动条里面轨道*/
  -webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
  border-radius: 0;
  background: rgba(0, 0, 0, 0.1);
}
.wrap {
  background: #fff;
  display: flex;
  text-align: center;
  justify-content: space-around;
  align-items: center;
  margin: 10px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.2);
  font-size: 1.5rem;
  font-weight: bolder;
  height: 131px;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.bg-purple {
  width: 50%;
  margin-top: -30px;
}
.bg-purple-light {
  background: #e5e9f2;
}
.text {
  font-size: 0.8rem;
  color: #36a3f7;
  text-shadow: 0 5px 10px red;
  white-space: nowrap;
  margin-top: 20px;
  font-weight: 700;
}

/* charts */

/* line */
.linecharts {
  width: 98%;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.2);
  background: #ffffff;
  margin: auto;
}
/* pie */
.pie {
  width: 98%;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.2);
  background: #ffffff;
  margin: auto;
  margin-top: 40px;
}
.earth {
  width: 98%;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.2);
  background: #ffffff;
  margin: auto;
  margin-top: 40px;
}
</style>