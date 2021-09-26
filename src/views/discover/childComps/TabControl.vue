<template>
  <el-tabs v-model="activeName" @tab-click="handleClick" class="discover-tabs">
    <el-tab-pane
      class="tab-item"
      v-for="item in tabs"
      :key="item.name"
      :label="item.label"
      :name="item.name"
    >
    </el-tab-pane>
  </el-tabs>
</template>

<script>
export default {
  name: "TabControl",
  data() {
    return {
      activeName: "/discover/personalrecom",
      tabs: [
        { label: "个性推荐", name: "/discover/personalrecom" },
        { label: "专属定制", name: "/discover/customize" },
        { label: "歌单", name: "/discover/songlist" },
        { label: "排行榜", name: "/discover/toplist" },
        { label: "歌手", name: "/discover/singer" },
        { label: "最新音乐", name: "/discover/newsing" },
      ],
    };
  },
  methods: {
    handleClick(tab) {
      this.$router.replace(tab.name);
    },
  },
};
</script>

<style lang="less">
.discover-tabs {
 
  .el-tabs__nav-wrap::after {
    height: 0;
  }
  .el-tabs__item {
    font-size: 18px;
    height: 46px;
  }
  .el-tabs__item.is-active{
      font-size: 22px;
  }
  .el-tabs__active-bar{
      height: 4px;
  }
}
</style>>

