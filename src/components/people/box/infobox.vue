<template>
    <div class="box">
        <el-card class="box-card">
            <div slot="header" class="clearfix">
            <span>消息通知系统</span>
            <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
            </div>
            <div class="text item">  
            <el-table
            :data="tableData"
            stripe
            style="width: 100%"
            height="350px">
            <el-table-column
            fixed
            prop="address"
            label="标题"
            width="400">
            </el-table-column>
            <el-table-column
            prop="date"
            label="日期"
            width="130">
            </el-table-column>
            </el-table>
        </div>
        </el-card>
        
    </div>
</template>

<script>
export default {
    data() {
    const item = {
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      };
      return {
      tableData: Array(9).fill(item),
      }
    }
}
</script>

<style lang="less" scoped>
.box{
    width: 600px;
    height: 420px;
}
</style>