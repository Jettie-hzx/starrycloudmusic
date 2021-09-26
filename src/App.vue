<template>
  <div id="app">
    <layout></layout>
  </div>
</template>
<script>
import Layout from  "views/Layout.vue"
export default {
  name: "App",
 components:{
   Layout
 }
};
</script>
<style lang="less">
/* 滚动条样式 */
::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-thumb {
  background-color: rgba(0, 0, 255, 0.1);
  border-radius: 3px;
}
</style>
