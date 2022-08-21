<template>
  <div class="bankNameManage">
    <div class="query_conditions">
      <div class="query_logo">查询条件</div>
      <el-form
        :inline="true"
        :model="formInline"
        class="demo-form-inline"
        style="text-align: left"
      >
        <el-form-item label="机构号">
          <el-input
            v-model="formInline.institutionNo"
            placeholder="机构号"
            size="large"
          ></el-input>
        </el-form-item>
        <el-form-item label="机构名称">
          <el-input
            v-model="formInline.institutionName"
            placeholder="机构名称"
            size="large"
          ></el-input>
        </el-form-item>
        <el-form-item label="机构类型">
          <el-select
            v-model="formInline.institutionType"
            placeholder="机构类型"
            size="large"
          >
            <el-option label="银行机构" value="PT00"></el-option>
            <el-option label="非银行机构" value="PT01"></el-option>
          </el-select>
        </el-form-item>
      </el-form>
    </div>
    <div class="btn">
      <el-button type="primary" @click="query" size="medium">查询</el-button>
      <el-button type="primary" @click="reset" size="medium">重置</el-button>
      <el-button type="primary" @click="add" size="medium">添加</el-button>
      <el-button
        type="primary"
        @click="update"
        size="medium"
        v-bind:disabled="!canSelect"
        >修改</el-button
      >
      <el-button type="primary" @click="remove" size="medium">删除</el-button>
    </div>
    <div class="table">
      <el-table
        :data="
          tableData.slice((currentPage - 1) * pageSize, currentPage * pageSize)
        "
        highlight-current-row
        @current-change="handleSelectionChange"
      >
        <el-table-column
          prop="institutionNo"
          label="机构号"
          min-width="10%"
          align="center"
        >
        </el-table-column>
        <el-table-column
          prop="institutionName"
          label="机构名称"
          min-width="10%"
          align="center"
        >
        </el-table-column>
        <el-table-column
          prop="institutionType"
          label="机构类型"
          min-width="10%"
          align="center"
        >
        </el-table-column>
        <el-table-column
          prop="bankNo"
          label="人行行号"
          min-width="10%"
          align="center"
        >
        </el-table-column>
        <el-table-column
          prop="institutionSign"
          label="机构标志"
          min-width="10%"
          align="center"
        >
        </el-table-column>
        <el-table-column
          prop="status"
          label="状态"
          min-width="10%"
          align="center"
        >
        </el-table-column>
        <el-table-column
          prop="contact"
          label="联系人"
          min-width="10%"
          align="center"
        >
        </el-table-column>
        <el-table-column
          prop="phone"
          label="电话"
          min-width="10%"
          align="center"
        >
        </el-table-column>
        <el-table-column
          prop="email"
          label="邮箱"
          min-width="10%"
          align="center"
        >
        </el-table-column>
        <el-table-column
          prop="createTime"
          label="创建时间"
          min-width="10%"
          align="center"
        >
        </el-table-column>
        <el-table-column
          prop="updateTime"
          label="修改时间"
          min-width="10%"
          align="center"
        >
        </el-table-column>
      </el-table>
    </div>
    <div class="block">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        :page-sizes="[1, 2, 3, 4]"
        :page-size="pageSize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="tableData.length"
      >
      </el-pagination>
    </div>
    <popup
      v-if="showPopup"
      :isSelect="isSelect"
      @closePopup="closePopup"
      :select="select"
    ></popup>
  </div>
</template>

<script>
import popup from "./components/Popup.vue";
export default {
  name: "bankNameManage",
  components: {
    popup, //弹窗组件
  },
  data() {
    return {
      // 查询条件
      formInline: {
        institutionNo: "",
        institutionName: "",
        institutionType: "",
      },
      // 表格数据
      tableData: [
        {
          institutionNo: "c2021101101",
          institutionName: "中国农商银行",
          institutionType: "银行机构",
          bankNo: "102100099996",
          institutionSign: "PT00",
          status: "正常",
          contact: "XXX",
          phone: "18888888888",
          email: "1202020201@qq.com",
          createTime: "2021-10-11",
          updateTime: "2021-10-11",
        },
        {
          institutionNo: "c2021101102",
          institutionName: "中国农商银行",
          institutionType: "银行机构",
          bankNo: "102100099996",
          institutionSign: "PT00",
          status: "正常",
          contact: "XXX",
          phone: "18888888888",
          email: "1202020201@qq.com",
          createTime: "2021-10-11",
          updateTime: "2021-10-11",
        },
        {
          institutionNo: "c2021101103",
          institutionName: "中国农商银行",
          institutionType: "银行机构",
          bankNo: "102100099996",
          institutionSign: "PT00",
          status: "正常",
          contact: "XXX",
          phone: "18888888888",
          email: "1202020201@qq.com",
          createTime: "2021-10-11",
          updateTime: "2021-10-11",
        },
      ],
      // 选中的值
      select: {
        institutionNo: "",
        institutionName: "",
        institutionType: "",
        bankNo: "",
        institutionSign: "",
        status: "",
        contact: "",
        phone: "",
        email: "",
      },
      isSelect: false,
      currentPage: 1,
      pageSize: 1,
      showPopup: false,
      canSelect: false,
    };
  },
  watch: {
    select: {
      handler(newValue, oldValue) {
        console.log("newValue", newValue);
        if (newValue.createTime) {
          this.canSelect = true;
        } else {
          this.canSelect = false;
        }
      },
      deep: true,
    },
  },
  methods: {
    //关闭弹窗
    closePopup() {
      this.showPopup = false;
    },
    handleSelectionChange(val) {
      Object.assign(this.select, val);
    },
    //修改分页器每页页数
    handleSizeChange(val) {
      console.log("size", val);
      this.pageSize = val;
    },
    //修改分页器的页码
    handleCurrentChange(val) {
      this.currentPage = val;
      console.log("currentPage", this.currentPage);
    },
    //查询
    query() {
      console.log(
        "1111",
        this.tableData.slice(
          (this.currentPage - 1) * this.pageSize,
          this.currentPage * this.pageSize
        )
      );
      console.log("formInline", this.formInline);
      //接口对接
    },
    //新增
    add() {
      this.showPopup = true;
      this.isSelect = false;
    },
    //重置
    reset() {
      this.formInline = {
        institutionNo: "",
        institutionName: "",
        institutionType: "",
      };
    },
    //修改
    update() {
      this.showPopup = true;
      this.isSelect = true;
    },
    //删除
    remove() {
      console.log("select", this.select);
      console.log("iselect", this.isSelect);
    },
  },
};
</script>

<style scoped>
.bankNameManage {
  height: 100%;
  width: 100%;
}
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
  margin-left: 30px;
  height: 10%;
  display: flex;
  align-items: center;
}
.el-button {
  margin-right: 10px;
}
.table {
  width: 95%;
  background-color: black;
  margin: 15px auto 15px;
}
.Popup-back {
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100vw;
  height: 100vh;
  background-color: black;
  opacity: 0.35;
}
.Popup {
  height: 80%;
  width: 60%;
  background-color: white;
  position: absolute;
  z-index: 1000;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.modal-header {
  background-color: #eff2f7;
  height: 40px;
  line-height: 40px;
  text-align: left;
  font-size: 16px;
  font-weight: 700;
  border-bottom: 1px solid rgb(199, 196, 196);
}
.close {
  position: absolute;
  right: 1em;
  top: 8px;
  font-size: 20px;
  font-weight: 600;
  color: #666;
  cursor: pointer;
}
.el-col {
  height: 75px !important;
}
</style> 
