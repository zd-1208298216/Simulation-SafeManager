<template>
  <div class="payBusinessQuery">
    <div class="query_conditions">
      <div class="query_logo">查询条件</div>
      <el-form
        :inline="true"
        :model="formInline"
        class="demo-form-inline"
        style="text-align: left"
      >
        <el-form-item label="起始月份">
          <el-date-picker
            v-model="formInline.startMonth"
            type="month"
            value-format="yyyy-MM"
            placeholder="起始月份">
          </el-date-picker>
        </el-form-item>
        <el-form-item label="截止月份">
          <el-date-picker
            v-model="formInline.endMonth"
            type="month"
            value-format="yyyy-MM"
            placeholder="截止月份">
          </el-date-picker>
        </el-form-item>
        <div class="btn">
          <el-button type="primary" @click="query" size="medium">查询</el-button>
          <el-button type="primary" @click="reset" size="medium">重置</el-button>
        </div>
      </el-form>
    </div>
    <div class="query_result">
      <span class="result_logo">查询结果</span>
      <div id="chart_example"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "user",
  components: {},
  data() {
    return {
      formInline:{
        startMonth:'',
        endMonth:''
      },
      series:[],
      xAxis:[]
    };
  },
  mounted() {
    this.showEcharts();    
  },
  methods: {
    showEcharts(){
      let this_ = this;
      var echarts = require('echarts');
      let myChart = echarts.init(document.getElementById('chart_example'));
      let option = {
        backgroundColor:'white',
        color: ['#f44'],
        tooltip : {
          trigger: 'axis',
          axisPointer : {
            type : 'cross'
          }
        },
        legend: {
          data: ['Email', 'Union Ads', 'Video Ads', 'Direct', 'Search Engine']
        },
        xAxis : [
          {
            name:'月份/月',
            type : 'category',
            data : this.xAxis,
            axisTick: {
              alignWithLabel: true
            }
          }
        ],
        yAxis : [
          {
            name:'笔数',
            type : 'value',
            axisLine:{
              show:true
            },
          }
        ],
        series : [
          {
            name:'每月花费',
            type:'line',
            barWidth: '60%',
            data:this.series
          }
        ]
      };
      myChart.setOption(option);
      //建议加上以下这一行代码，不加的效果图如下（当浏览器窗口缩小的时候）。超过了div的界限（红色边框）
      window.addEventListener('resize',function() {myChart.resize()});
    },
    query(){
      var startMonth = this.formInline.startMonth.substring(5);
      var endMonth = this.formInline.endMonth.substring(5);
      if(this.formInline.startMonth > this.formInline.endMonth){
        this.$message.error('起始月份大于截止月份');
      }
      this.series = [995,666,444,858,654,236,645,546,846,225,547,356];
      this.xAxis = ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月'];
      this.showEcharts();
    },
    reset(){
      this.formInline = {
        startMonth:'',
        endMonth:''
      }
    }
  },
};
</script>

<style scoped>
/* .payBusinessQuery{
  height: 100%;
  width: 100%;
  overflow: auto;
} */
  .query_conditions {
    width: 100%;
    height: 27%;
    }
  .query_logo {
    height: 50px;
    background-color: #b3c0d1;
    line-height: 50px;
    text-align: left;
    padding-left: 30px;
  }
  .el-form-item {
    margin-left: 30px;
    margin-top: 25px;
  }
  .btn {
    text-align: left;
    margin-left: 50px;
    height: 10%;
    display: flex;
    align-items: center;
    display: inline-block;
    margin-top: 25px;
  }
  .el-button {
    margin-right: 20px;
  }
  .query_result{
    position: relative;
    height: 600px;
    width: 96%;
    margin: 10px auto 0px;
    border: 1px solid rgb(197, 191, 191);
    border-radius: 10px;
  }
  .result_logo{
    font-size: 17px;
    position: absolute;
    top: 10px;
    left: 10px;
  }
  #chart_example{
    width: 80%;
    height: 500px;
    margin: 60px auto 20px;
  }
</style>
