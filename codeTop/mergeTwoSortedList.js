let nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
let merge = (nums1, m, nums2, n) => {
    let pointer1 = m - 1
    let pointer2 = n - 1
    let tailer = m + n - 1
    while (tailer >= 0) {
        if(pointer1 === -1){
            nums1[tailer --] = nums2[pointer2 --]
            continue
        }
        if(pointer2 === -1){
            nums1[tailer --] = nums1[pointer1 --]
            continue
        }
        let number1 = nums1[pointer1]
        let number2 = nums2[pointer2]
        if(number1 > number2){
            nums1[tailer --] = nums1[pointer1 --]
        }else{
            nums1[tailer --] = nums2[pointer2 --]
        }
    }
    return nums1
}
merge(nums1,3,nums2,3)
console.log(nums1)