<template>
  <div class="discover">
    <div class="tab-control">
      <tab-control></tab-control>
    </div>
      
     <router-view />
  </div>
</template>

<script>
import TabControl from "./childComps/TabControl.vue"
export default {
    name:"Discover",
    components:{
      TabControl
    }
}
</script>

<style lang="less" scoped>
    .discover{
     // padding-top: 50px;
     position: relative;
      .tab-control{
        width: 1130px;
        height: 55px;
        z-index: 10;
        padding-top: 15px;
        background-color: #fff;
        position: fixed;
        top:60px;
        
      }
    }
</style>>

