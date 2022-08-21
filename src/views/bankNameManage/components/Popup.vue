<template>
    <div class="Popup">
        <div class="modal-header">
          <span style="margin-left:40px" v-if="!isSelect">行名行号添加</span>
          <span style="margin-left:40px" v-else>行名行号修改</span>
          <div class="close el-icon-close" @click="closeUpdatePopup"></div>
        </div>
        <div class="modal-body" style="width:80%;margin:auto">
          <el-form :model="popupNum" class="demo-form-inline" label-position="left"  label-width="80px">
            <el-row>
                <el-col :span="12">
                  <el-form-item label="机构号">
                    <el-input v-model="popupNum.institutionNo" placeholder="机构号" size="medium" :disabled="isSelect"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="12">
                  <el-form-item label="机构名称">
                    <el-input v-model="popupNum.institutionName" placeholder="机构名称" size="medium"></el-input>
                  </el-form-item>
                </el-col>
            </el-row>            
            <el-row>
                <el-col :span="12">
                  <el-form-item label="机构类型">
                    <el-select v-model="popupNum.institutionType" placeholder="机构类型" size="medium">
                      <el-option label="银行机构" value="银行机构"></el-option>
                      <el-option label="非银行机构" value="非银行机构"></el-option>
                    </el-select>
                  </el-form-item>
                </el-col>
                <el-col :span="12">
                  <el-form-item label="入行行号">
                    <el-input v-model="popupNum.bankNo" placeholder="入行行号" size="medium"></el-input>
                  </el-form-item>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="12">
                    <el-form-item label="机构标识">
                      <el-input v-model="popupNum.institutionSign" placeholder="机构标识" size="medium"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                  <el-form-item label="状态">
                    <el-select v-model="popupNum.status" placeholder="状态" size="medium">
                      <el-option label="0-退出" value="退出"></el-option>
                      <el-option label="1-正常" value="正常"></el-option>
                      <el-option label="2-故障" value="故障"></el-option>
                    </el-select>
                  </el-form-item>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="12">
                  <el-form-item label="联系人">
                    <el-input v-model="popupNum.contact" placeholder="联系人" size="medium"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="12">
                  <el-form-item label="电话">
                    <el-input v-model="popupNum.phone" placeholder="电话" size="medium"></el-input>
                  </el-form-item>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="12">
                  <el-form-item label="邮箱">
                    <el-input v-model="popupNum.email" placeholder="邮箱" size="medium"></el-input>
                  </el-form-item>
                </el-col>
            </el-row>
            <el-form-item style="margin:30px 0 0 0">
              <el-button type="primary" @click="Addsure" v-if="!isSelect">保存</el-button>
              <el-button type="primary" @click="updatesure" v-else>修改</el-button>
              <el-button @click="cancel">取消</el-button>
            </el-form-item>
          </el-form>
        </div>
    </div>
</template>

<script>
  export default {
    name: 'popup',
    props:{
        isSelect:{
            type: Boolean,
            default: false
        },
        select:{
            type: Object,
            default:{}
        }
    },
    data() {
      return {
            // 选中的值
        popupNum:{
            institutionNo:'',
            institutionName:'',
            institutionType:'',
            bankNo:'',
            institutionSign:'',
            status:'',
            contact:'',
            phone:'',
            email:'',
        },
        commomDate:{
          institutionNo:'',
          institutionName:'',
          institutionType:'',
          bankNo:'',
          institutionSign:'',
          status:'',
          contact:'',
          phone:'',
          email:'',
      },
      }
    },
    computed: {},
    watch: {},
    methods: {
        closeUpdatePopup(){
            this.$emit('closePopup');
        },
        updatesure(){
            this.$emit('closePopup');
        },
        cancel(){
            this.$emit('closePopup');
        },
        Addsure(){
            console.log('保存数据',this.popupNum);
            this.$emit('closePopup');
        }
    },
    created() {
        console.log('isSelect',this.isSelect);
        if(this.isSelect == false){
            Object.assign(this.popupNum,this.commomDate);
        }else{
            Object.assign(this.popupNum,this.select);
        }
    },
    mounted() {}
  }
</script>


<style scoped>
.Popup{
    height: 80%;
    width: 60%;
    background-color: white;
    position: absolute;
    z-index: 1000;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
  }
  .modal-header{
    background-color: #eff2f7;
    height:40px;
    line-height: 40px;
    text-align: left;
    font-size: 16px;
    font-weight: 700;
    border-bottom: 1px solid rgb(199, 196, 196);
  }
  .close{
    position: absolute;
    right: 1em;
    top: 8px;
    font-size: 20px;
    font-weight: 600;
    color: #666;
    cursor: pointer;
  }
  .el-form-item{
    margin-left: 30px;
    margin-top: 25px;
    margin-bottom: 10px;
  }
    .el-button{
    margin-right: 10px;
  }
</style>
