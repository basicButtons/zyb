function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}
let node2 = new ListNode(2)
let node4 = new ListNode(4)
let node3 = new ListNode(3)
let node5 = new ListNode(5)
let node6 = new ListNode(6)
let node42 = new ListNode(4)
let l1 = node2
node2.next = node4
node4.next = node3

let l2 = node5 
node5.next = node6
node6.next = node42

let addTwoNumber = (l1,l2)=>{
    let l3 = new ListNode()
    let head = l3
    let carry = 0
    while(l1 || l2){
        let num1 = l1 ? l1.val : 0
        let num2 = l2 ? l2.val : 0
        l1 = l1 ? l1.next : null
        l2 = l2 ? l2.next : null
        let sum = num1 + num2 + carry
        let currentNumber = sum % 10
        carry = parseInt(sum / 10)
        let newNode = new ListNode(currentNumber)
        l3.next = newNode
        l3 = l3.next
    }

    if(carry > 0){
        let newNode = new ListNode(carry)
        l3.next = newNode
    }

    return head.next
}

let l3 = addTwoNumber(l1,l2)
console.log(l3)