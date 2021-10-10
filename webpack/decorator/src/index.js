function f1(){
    console.log(this)
}
function f2(){
    'use strict'
    console.log(this)
}
f1()
f2()

const foo={
    bar:10,
    fn:function(){
        console.log(this)
        console.log(this.bar)
    }
}
var f3 = foo.fn
f3()


Function.prototype.mybind = function(context,...args){
    let self = this
    return function(){
        const args2 = Array.prototype.slice(arguments)
        const newArgs = args.concat(args2)
        return this.apply(self,newArgs)
    }
}
console.log(some)
function some(){

}
console.log(some)
var some = 1
console.log(some)