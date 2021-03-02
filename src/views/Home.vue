<template>
  <div class="home">
    <el-container style="height: 1000px; border: 1px solid #eee">
      <el-aside width="200px" style="bapckground-color: rgb(0, 21, 41)">
        <div style="width:200px;height:60px;line-height:60px; background:#002140;color:#fff">装修平台Decoration platform</div>
         <el-menu
      default-active="1"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      @select="handleSelect"
      background-color="#001529"
      text-color="#B5B5B5"
      active-text-color="#ffd04b">
      <div class="clip-system">
        <i class="el-icon-menu"></i>
        人事管理
      </div>
      <el-menu-item index="1">
        <span slot="title" >组织架构系统</span>
      </el-menu-item>
      <el-menu-item index="2">
        <span slot="title">员工权限系统</span>
      </el-menu-item>
      <el-menu-item index="3" >
        <span slot="title">员工管理系统</span>
      </el-menu-item>
      <div class="clip-system">
        <i class="el-icon-menu"></i>
        物料管理
      </div>
      <el-menu-item index="4">
        <span slot="title">物料采购系统</span>
      </el-menu-item>
      <el-menu-item index="5">
        <span slot="title">物料入库系统</span>
      </el-menu-item>
      <el-menu-item index="6">
        <span slot="title">物料出库系统</span>
      </el-menu-item>
      <div class="clip-system">
        <i class="el-icon-menu"></i>
        客户管理
      </div>
      <el-menu-item index="7">
        <span slot="title">客户信息系统</span>
      </el-menu-item>
      <el-menu-item index="8">
        <span slot="title">潜在客户系统</span>
      </el-menu-item>
      <div class="clip-system">
        <i class="el-icon-menu"></i>
        工程管理
      </div>
      <el-menu-item index="9">
        <span slot="title">订单管理系统</span>
      </el-menu-item>
      <el-menu-item index="10">
        <span slot="title">订单区域管理</span>
      </el-menu-item>
      <div class="clip-system">
        <i class="el-icon-menu"></i>
        报表统计
      </div>
      <el-menu-item index="11">
        <span slot="title">财务订单系统</span>
      </el-menu-item>
      <el-menu-item index="12">
        <span slot="title">数据统计系统</span>
      </el-menu-item>
    </el-menu>
      </el-aside>
      <el-container>
        <el-header style="text-align: right; font-size: 12px">
          <el-dropdown>
            <i class="el-icon-setting" style="margin-right: 15px"></i>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>查看</el-dropdown-item>
              <el-dropdown-item>新增</el-dropdown-item>
              <el-dropdown-item>删除</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
          <span>王小虎</span>
        </el-header>
        
        <el-main>
          <v-homepage v-if="pageswitch === '1'"></v-homepage>

          <el-table v-if="pageswitch === '2'" :data="tableData" >
            <el-table-column prop="date" label="日期" width="140">
            </el-table-column>
            <el-table-column prop="name" label="姓名" width="120">
            </el-table-column>
            <el-table-column prop="address" label="地址">
            </el-table-column>
          </el-table>
        </el-main>
      </el-container>


    </el-container>
  </div>
</template>

<script>
// @ is an alias to /src
//import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  mounted(){
    this.pageswitch='1'
  },
  data() {
      const item = {
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      };
      return {
        pageswitch:'1',
        tableData: Array(20).fill(item),
        SysName:["组织架构系统","员工权限系统",
        "员工管理系统","物料采购系统","物料入库系统",
        "物料出库系统","客户信息系统","潜在客户系统",
        "订单管理系统","订单区域管理","财务订单系统","数据统计系统"]
      }
    },
  methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      },
       handleSelect(key) {
         
        this.pageswitch = key;
        console.log(key,this.pageswitch)
      }

    }
};
</script>

<style lang="less" scoped>
  .clip-system{
    color: #fff;
    width: 70%;
    height: 35px;
    line-height: 40px;
    text-align: left;
    padding-left:20px;
  }
  .el-menu-item{
    background-color: #000;
  }
  .el-header {
    background-color: #B3C0D1;
    color: #333;
    line-height: 60px;
  }
  
  .el-aside {
    color: #333;
  }
</style>
