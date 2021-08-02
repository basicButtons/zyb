var merge = function(nums1, m, nums2, n) {
    let pointer1 = m-1
    let pointer2 = n-1
    let pointer3 = n + m - 1
    while(pointer1 >=0 && pointer2>=0){
        num1 = nums1[pointer1] || 0
        num2 = nums1[pointer2] || 0
        debugger
        if(num1 > num2){
            nums1[pointer3--] = nums1[pointer1--]
        }else{
            nums1[pointer3--] = nums2[pointer2--]
        }
    }
    return nums1
};
let nums1 = [1,2,3,0,0,0]
let nums2 = [4,5,6]
console.log(merge(nums1,3,nums2,3))