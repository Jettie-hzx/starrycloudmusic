export function numberFormat(number){
    if(number>10000){
        return (number/10000).toFixed(0)+"万"
    }
    return number
}