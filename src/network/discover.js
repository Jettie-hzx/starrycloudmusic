import request from "./request";
export function getSwiper(){
    return request({
        url:"/banner"
    })
}
//推荐歌单
export function getPersonalized(){
    return request({
        //url:"/top/playlist"
        url:'/personalized',
        params:{
            limit:30
        }
    })
}