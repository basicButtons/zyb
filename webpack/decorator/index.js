function single(fn){
    let item = null
    return function(...args){
        return item || (item = new fn(...args))
    }
}

@single
function getCar(name,age){
    this.name = name
    this.age = age
}

let a = new getCar("maxuan",21)
let b = new getCar("xiaojiang",22)
console.log()