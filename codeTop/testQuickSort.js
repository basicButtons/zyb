const quickSort = (nums,left,right)=>{
    console.log(left,right)
    const wrap = (nums,i,j)=>{
        // console.log(i,j)
        let temp = nums[i]
        nums[i] = nums[j]
        nums[j] = temp
    }
    const patition = (nums,left,right)=>{
        if(left>=right){
            return
        }
        let pival = nums[left]
        let pointer1 = left
        let pointer2 = right + 1
        while(true){
            while(nums[++pointer1] < pival) { if(pointer1 == right) {break} }
            while(nums[--pointer2] > pival) { if(pointer2 == left) {break} }
            if(pointer1 >= pointer2) break
            wrap(nums,pointer1,pointer2)
        }
        wrap(nums,left,pointer2)
        return pointer2
    }
    if(right <= left){
        return
    }
    let position = patition(nums,left,right)
    quickSort(nums,left,position-1)
    quickSort(nums,position+1,right)
}
let res = [9,8,7,6,5,4,3,2,1]
quickSort(res,0,res.length-1)
console.log(res)