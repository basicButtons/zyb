// Function.prototype.mybind = function(context,...args){
//     let self = this
//     console.log(self)
//     let F = function(){}
//     F.prototype = this.prototype
//     let bound = function(){
//         let innerargs = Array.prototype.slice.call(arguments)
//         let finalArgs = innerargs.concat(args)
//         console.log(this instanceof self)
//         return self.apply(this instanceof F ? this : context || this , finalArgs)
//     }
//     bound.prototype = new F()
//     return bound
// }

// function some(){
//     this.some = "some name"
//     // console.log(this instanceof some)
//     // console.log(this)
//     // console.log(this.some)
// }

// let tempThis = {
//     some : "new name"
// }

// let newSome = some.mybind(tempThis)
// let res1 = new newSome()
// let res2 = newSome()

// // function foo(arg1=arg2,arg2){
// // 	console.log(`${arg1} ${arg2}`)
// // }
// // foo(1,2)
// // var bar = function(){
// // 	console.log("bar2")
// // }
// // function bar(){
// // 	console.log("bar1")
// // }
// // bar() // bar2
// console.log("================")
// foo(10)
// function foo(num){
// 	console.log(foo)
// 	foo = num
// 	console.log(foo)
// 	var foo
// }
// console.log(foo)
// var foo=1
// console.log(foo)


let timer = setTimeout(()=>{console.log(0)},100)
clearTimeout(timer)
timer = null
// console.log(timer)
if(timer){
    console.log(1)
}
