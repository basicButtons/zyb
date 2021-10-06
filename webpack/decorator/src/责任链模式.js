var order = function(orderType, isPay, count){
    if(orderType == 1){
        if(isPay ==true){
            console.log("亲爱的用户，您中奖了100元红包了！")
        }else{
            if(count > 0){
                console.log("亲爱的用户，您中奖了10元优惠券了！")
            }else{
                console.log("亲爱的用户，请再接再厉哦！")
            }
        }
    }else if(orderType == 2){
        if(isPay ==true){
            console.log("亲爱的用户，您中奖了20元红包了！")
        }else{
            if(count > 0){
                console.log("亲爱的用户，您中奖了10元优惠券了！")
            }else{
                console.log("亲爱的用户，请再接再厉哦！")
            }
        }
    }else if(orderType == 3){
        if(isPay ==true){
            console.log("亲爱的用户！")
        }else{
            if(count > 0){
                console.log("亲爱的用户，您中奖了10元优惠券了！")
            }else{
                console.log("亲爱的用户，请再接再厉哦！")
            }
        }
    }
}

function order500(orderType,ispay,count){
    if(orderType === 1 && ispay === true){
        console.log("亲爱的用户，您中奖了100元红包了！")
    }else{
        return "next"
    }
}
function order200(orderType,ispay,count){
    if(orderType === 2 && ispay === true){
        console.log("亲爱的用户，您中奖了20元红包了！")
    }else{
        return "next"
    }
}
function orderNormal(orderType,ispay,count){
    // console.log(count)
    if(count>0){
        console.log("亲爱的用户，您中奖了10元红包了！")
    }else{
        console.log("亲爱的用户，请再接再厉哦！")
    }
}

class chain{
    constructor(fn){
        this.fn = fn
        this.next = null
    }
    setNext(fn){
        this.next = fn
    }
    pass(){
        let res = this.fn.apply(this,arguments)
        if(res === "next"){
            this.next && this.next.pass.apply(this.next,arguments)
        }
    }
}

let chainOrder500 = new chain(order500)
let chainOrder200 = new chain(order200)
let chainOrderNormal = new chain(orderNormal)

chainOrder500.setNext(chainOrder200)
chainOrder200.setNext(chainOrderNormal)

chainOrder500.pass(1,true,0)
chainOrder500.pass(1,true,100)
chainOrder500.pass(1,false,100)
chainOrder500.pass(1,false,0)
chainOrder500.pass(2,true,0)
chainOrder500.pass(2,true,100)
chainOrder500.pass(2,false,100)
chainOrder500.pass(2,false,0)
chainOrder500.pass(3,true,0)
chainOrder500.pass(3,true,100)
chainOrder500.pass(3,false,100)
chainOrder500.pass(3,false,0)