<template>
  <div>
    <el-container class="layout-container">
      <el-header class="header-music">
        <top-bar></top-bar>
      </el-header>
      <el-container class="content-container">
        <template v-if="!isVideo">
          <el-aside class="aside-music" width="250px"> 
              <left-menu></left-menu>
          </el-aside>
          <el-main class="main-music">
            <router-view />
          </el-main>
          
          <!-- <discover></discover> -->
        </template>

        <template v-else> <router-view /></template>
      </el-container>
      <el-footer class="footer-music">
        <bottom-bar></bottom-bar>
      </el-footer>
    </el-container>
  </div>
</template>

<script>
// import Discover from "views/discover/Discover.vue"
import TopBar from "components/content/topBar/TopBar.vue";
import BottomBar from "components/content/bottomBar/BottomBar.vue";
import LeftMenu from "components/content/leftMenu/LeftMenu.vue"

export default {
  name: "Layout",
  components: {
    TopBar,
    BottomBar,
    LeftMenu,
    // Discover
   
  },
  data(){
      return{
          isVideo:false
      }
  }
};
</script>

<style lang="less" scoped>
.layout-container {
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
.aside-music {
  height: 100%;
  background-color: pink;
}
.footer-music {
  height: 70px !important;
  background: rgba(0, 0, 255, 0.1);
}

.content-container {
  display: flex;
  background-color: #fff;
  color: #333;
  height: 770px;
  min-height: 770px;
  width: 100%;
  padding: 0;
}
.main-music{
  flex: 1;
  padding-top: 70px;
  //background-color: blue;
}

</style>>

