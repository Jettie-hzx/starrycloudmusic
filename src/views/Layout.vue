<template>
  <div>
    <el-container class="layout-container">
      <el-header class="header-music">Header</el-header>
      <el-main class="main-music">Main</el-main>
      <el-footer class="footer-music">Footer</el-footer>
    </el-container>
  </div>
</template>

<script>
export default {
  name: "Layout",
};
</script>

<style lang="less" scoped>
.layout-container{
    width: 1400px;
    min-width: 1400px;
    //height: 100vh;
    margin: 0 auto;
}
    .header-music {
    background-color: #5292fe;
    color: #fff;
    
    height: 60px;
  }
   .footer-music{
        height: 70px !important;
        background: rgba(0, 0, 255, 0.1);
   }
  
  
  .main-music {
    background-color: #E9EEF3;
    color: #333;
    height: 770px;
    min-height: 770px;
    padding: 0 20px;
  }
  
  
</style>>

