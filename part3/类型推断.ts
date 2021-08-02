interface overloaded {
    (num1:number,num2:number):number;
    (num1:number,num2:number,num3:number,num4:number):number;
}
const overFun:overloaded =  (num)=>{
    return num
}

interface obj {
    day : number;
    num : number;
}
type some = {
    day:number;
    num : number;
}
const now = {} as some
now.day = 1

function logName(something:{name:string}):void{
    console.log(something.name)
}
let temp = {name:"123",age:18}
logName(temp)
// logName({name:"123",age:18})
interface q{
    x:number
}
interface p{
    y:number
}
function doStuff(obj:q|p){
    if("x" in obj){
        // console.log(obj.y)
        // 这个地方可以被类型推断出来
    }else{
        // console.log(obj.x)
        // 这个地方也可以被类型推断出来
    }
}