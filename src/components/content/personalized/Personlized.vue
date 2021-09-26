<template>
  <div>
     <common-title name="推荐歌单"></common-title>
      <div class="music-list">
          
            <div class="music-item"
            v-for="item in personalized"
          :key="item.id"
         >
                <list-item :item-info="item"
                isPlay
                >
                    
                </list-item>
            </div>
    </div>  
  </div>
</template>

<script>
import CommonTitle from "components/common/commonTitle/CommonTitle.vue"
import ListItem from "components/common/listItem/ListItem.vue"
import {getPersonalized} from "network/discover"
export default {
    name:"Personalized",
    components:{
      CommonTitle,
      ListItem
    },
    data(){
        return{
            personalized:[]
        }
    },
    created(){
        this.getPersonalized()
    },
    mounted(){
       
    },
    methods:{
        async getPersonalized(){
            const res =await getPersonalized()
           //console.log(res);
            this.personalized=res.result.slice(0,10)
            
        }
    }
}
</script>

<style lang="less" scoped>
    .music-list{
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        justify-content:space-between;
        .music-item{
            width: 19%;
            margin-bottom: 20px;
           
        }
       
    }
</style>>

