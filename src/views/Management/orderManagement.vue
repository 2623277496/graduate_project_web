<template>
  <div>
    <el-table style="width:100%" :data="tableData">
      <el-table-column label="日期" prop="date">

      </el-table-column>
       <el-table-column label="姓名" prop="name">
        
      </el-table-column>
       <el-table-column label="地址" prop="address">
        
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
    data() {
        return {
          tableData: [{
            date: '2016-05-02',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
          }, {
            date: '2016-05-04',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1517 弄'
          }, {
            date: '2016-05-01',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1519 弄'
          }, {
            date: '2016-05-03',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1516 弄'
          }]
        }
      }
}
</script>

<style scope>
  .el-table{
    /* display:none */
    width:200px
  }
</style>>

