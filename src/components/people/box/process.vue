<template>
    <div class="box">
        <el-card class="box-card">
            <div slot="header" class="clearfix">
            <span>流程中心</span>
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
            prop="kind"
            label="工单状态"
            width="100">
            </el-table-column>
            <el-table-column
            prop="name"
            label="工单名称"
            width="100">
            </el-table-column>
            <el-table-column
            fixed
            prop="state"
            label="处理状态"
            width="100">
            </el-table-column>
            <el-table-column
            fixed
            prop="date"
            label="提交日期"
            width="100">
            </el-table-column>
            <el-table-column
            fixed
            prop="date"
            label="完成日期"
            width="100">
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
        date: '2016-05-04',
          kind: '软件安装',
          name: '美甲机安装试用',
          state: '处理中',
          address: '上海市普陀区金沙江路 1517 弄',
          zip: 200333
      };
      return {
      tableData: Array(9).fill(item),
      }
    }
}
</script>

<style lang="less" scoped>
.box{
    width: 800px;
    height: 440px;
}

</style>