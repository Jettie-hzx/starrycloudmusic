<template>
  <div class="list-item">
      <div class="img">
          <img :src="itemInfo.picUrl" alt="">
        <div class="play"
        :style="{right,bottom}"
        v-show="isPlay"
        ><img src="~assets/play.png" alt=""></div>
        <div class="paly-count">
          <span class="iconfont icon-24gl-play"></span>
          <span>{{playCount}}</span>
      </div>
      </div>
      
      <div class="text">{{itemInfo.name}}</div>
  </div>
</template>

<script>
import {numberFormat} from "common/number"
export default {
    name:"ListItem",
    props:{
        itemInfo:{
            type:Object,
            default(){
                return {}
            }
        },
        right:{
            type:String,
            default(){
                return "8px"
            }
        },
        bottom:{
            type:String,
            default(){
                return "20px"
            }
        },
        isPlay:{
            type:Boolean,
            default(){
                return false
            }
        }
    },
    computed:{
        playCount(){
            return numberFormat(this.itemInfo.playCount)
        }
    }
}
</script>

<style lang="less" scoped>
    .list-item{
        width: 100%;
        img{
            width: 100%;
            border-radius: 8px;
            margin-bottom: 10px;
            cursor: pointer;
        }
      
        .text{
            line-height: 24px;
        }
    }
    .img{
        position: relative;
        
        &:hover .play{
            opacity: 1;
        }
    }
     .play{
            position: absolute;
            // right: 8px;
            // bottom: 20px;
            width: 38px;
            height: 38px;
            background-color: #fff;
            border-radius: 50%;
            transition: opacity 1s;
            opacity: 0;
            img{
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%,-50%);
                width:20px;
                height: 20px;
            }
        }
        .paly-count{
            position: absolute;
            right: 8px;
            top: 8px;
            color: #fff;
        }
</style>>

