<template>
    <div style="display:flex;">
        <div class="leftimg" :style="backgroundDiv">
        </div>
        <div style="margin-left:30%;margin-top:300px;">
            <div class="platform">
                <span>装修工程平台<br></span>
                <span style="font-size:18px;color:#C0C4CC;">Decoration platform<br></span>
            </div>
            <div class="password">
                <el-card class="box-card">
                    <el-input placeholder="请输入账号" v-model="IDnumber" clearable></el-input>
                    <el-input placeholder="请输入密码" v-model="password" show-password></el-input>
                </el-card>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            backgroundDiv: {
            backgroundImage: 'url(' + require('../assets/sign.jpg') + ')'
            
            },
            IDnumber:"",
            password:""
        }
    }
}
</script>

<style lang="less" scoped>
.leftimg{
    width: 23%;
    height: 1170px;
    background: no-repeat center top;
    background-size:cover;
}
.el-input {
    width: 230px;
  }
  .password{
      width: 300px;
  }
.platform{
    text-align: left;
    font-size: 33px;
    font-weight: bold;
    width: 200px;
    height: 120px;
}
</style>