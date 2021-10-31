var lengthOfLongestSubstring = function(s) {
    if(!s){
        return 0
    }
    let pointerL = 0
    let pointerR = 0
    let len = s.length
    let max = 0
    while(pointerR < len){
        let nextChar = s.charAt(pointerR)
        console.log(nextChar)
        console.log(s.slice(pointerL,pointerR).includes(nextChar))
        if(s.slice(pointerL,pointerR).indexOf(nextChar) >= 0){
            pointerL++
        }else{
            pointerR++
            max = Math.max(max,pointerR - pointerL)
        }
    }
    return max
};
console.log(lengthOfLongestSubstring("abcabcbb"))