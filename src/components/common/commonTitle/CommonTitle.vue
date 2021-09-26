<template>
  <div class="title">
      <div class="name">{{name}}</div>
      <div class="more">
          <span class="iconfont icon-xiayiyeqianjinchakangengduo"></span>
      </div>
  </div>
</template>

<script>
export default {
    name:"CommonTitle",
    props:{
        name:{
            type:String,
            default(){
                return "标题"
            }
        }
    }
}
</script>

<style lang="less" scoped>
    .title{
        margin: 20px 0;
        display: flex;
        align-items: center;
        height: 40px;
        .name{
            font-size: 30px;
            font-weight: 550;
            letter-spacing: 3px;
        }
        .more{
            span{
                font-size: 30px;
                color: #666;
            }
        }
    }
</style>

