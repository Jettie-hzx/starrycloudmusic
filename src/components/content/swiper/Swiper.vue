<template>
  <div class="swiper">
      <el-carousel :interval="4000" type="card" height="210px" >
    <el-carousel-item v-for="(item,index) in banners" :key="index"
   >
        <a :href="item.url" target="_blank">
            <img :src="item.imageUrl" alt="" class="banner-img">
        </a>
      
    </el-carousel-item>
  </el-carousel>
  </div>
</template>

<script>
import { getSwiper} from "network/discover"
export default {
    name:"Swiper",
    data(){
        return{
            banners:[]
        }
    },
    created(){
        this.getSwiper()
    },
    methods:{
        async getSwiper(){
            const res=await getSwiper()
            this.banners=res.banners
            
        }
    }
}
</script>
<style lang="less">
    .swiper{
       .el-carousel__indicator.is-active button {
    background-color: #EC4141;
} 


.el-carousel__mask {
    display: none;
}
   }
</style>
<style lang="less" scoped>
.banner-img{
    width: 100%;
    border-radius: 10px;
}
//    .swiper{
//        position: relative;
//        width: 1110px;
      
//        overflow: hidden;
//         .el-carousel{
//        left: -125px;
//        width: 1360px;
//    }
//    }
  
//    .el-carousel__container{
//        width: 676px;
//        height: 250px;
//        border-radius: 10px;
        
//    }
//   .el-carousel__item{
//       width: 676px;
//       height: 250px;
//     }
 


//  .banner-img{
//      width: 676px;
//      height: 250px;
//      border-radius: 10px;
    
//  }
</style>

