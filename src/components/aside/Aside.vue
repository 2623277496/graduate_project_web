<template>
  <div class="aside">
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose">
      <el-menu-item index="1"  @click="orderManagement">
        <i class="el-icon-menu"></i>
        <span slot="title">订单管理</span>
      </el-menu-item>
      <el-menu-item index="2"  @click="userControl">
        <i class="el-icon-menu"></i>
        <span slot="title">用户管理</span>
      </el-menu-item>
      <el-menu-item index="3">
        <i class="el-icon-setting"></i>
        <span slot="title">商品管理</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
    data() {
      return {
        isCollapse: false,
        menu:[],
      };
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      },
      // 用户管理的跳转路由
      userControl(){
        this.$router.push('user')
      },
      // 订单管理的路由
      orderManagement(){
        this.$router.push('orderManagement')
      }
      
    }
  }
</script>

<style lang="less" scoped>
 .el-menu{
    border: none;
  }
 .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 93vh;
  }
  .el-menu-item{
    padding: 0 50px;
  }
</style>