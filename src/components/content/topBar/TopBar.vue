<template>
  <div class="top-bar">
    <el-row>
      <el-col :span="5">
        <div class="top-bar-left">
          <img src="~assets/music.png" alt="" class="music-logo" />
          <span>云音乐</span>
        </div>
      </el-col>
      <el-col :span="9" class="header-center">
        <div class="back jump"></div>
        <div class="forward jump"></div>

        <el-input
          placeholder="请输入内容"
          prefix-icon="el-icon-search"
          class="search-input"
          clearable
          v-model="keyword"
        >
        </el-input>

        <div class="shiqu" title="听歌识曲"></div>
      </el-col>
      <el-col :span="10" class="header-right">
        <div class="login">
          <div class="youke user">
            <img src="~assets/img/common/logo.png" alt="" />
            <span>未登录</span>
          </div>

          <div class="vip">开通VIP</div>
        </div>
        <div class="func-icon">
            <span class="iconfont icon-pifu"></span>
            <span class="iconfont icon-shezhi"></span>
            <span class="iconfont icon-youjian"></span>
            <span class="iconfont icon-zuixiaohua"></span>
            <span class="iconfont icon-quanpingxianshi"></span>
            <span class="iconfont icon-guanbi"></span>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "TopBar",
  data() {
    return {
      keyword: "",
    };
  },
  updated(){
      console.log(this.keyword);
  }
};
</script>
<style>
.search-input input.el-input__inner {
  border-radius: 20px;
  background: rgba(0, 0, 0, 0.1);
  color: #fff;
  border: none;
}
</style>
<style lang="less" scoped>
.top-bar-left {
  display: flex;
  align-items: center;
  height: 60px;
  span {
    font-size: 24px;
    font-weight: 500;
    letter-spacing: 5px;
  }
}
.music-logo {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: #fff;
  margin-right: 10px;
}
.header-center {
  display: flex;
  align-items: center;
  height: 60px;
}
.jump,
.shiqu {
  position: relative;
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background-color: rgba(0, 0, 0, 0.1);
  color: #fff;
  &::after {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-family: "iconfont" !important;
    font-size: 20px;
  }
}
.back::after {
  content: "\e604";
}
.forward {
  margin-left: 10px;
  &::after {
    content: "\e8f1";
  }
}

.el-input {
  width: 240px;
  height: 40px;
  //border-radius: 20px;
  //background-color: rgba(0, 0, 0, 0.1);
  margin: 0 20px;

  border: none;
}

.shiqu {
  width: 40px;
  height: 40px;
  cursor: pointer;
  &::after {
    content: "\e61c";
  }
}
.header-right {
  padding-left: 60px;
    display: flex;
    align-items: center;
  height: 60px;
}
.login {
  position: relative;
    font-size: 14px;
  height: 60px;
  width: 200px;
  
  .user {
    position: absolute;
    height: 60px;
    display: flex;
    align-items: center;
    right: 70px;
    img {
      width: 32px;
      height: 32px;
      margin-right: 6px;
    }
  }
  .vip{
      position: absolute;
      right: 0;
      height: 60px;
      line-height: 60px;
  }
  &::after {
    position: absolute;
    content: "\e607";
    top: 50%;
    right: 55px;
    transform: translateY(-50%);
    font-family: "iconfont" !important;
    font-size: 12px;
  }
}

.func-icon{
    padding-left: 50px;
    .iconfont{
        font-size:22px;
        margin: 10px;
    }
}
</style>>

