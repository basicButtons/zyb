const arr = [1,1,2,3]
const arr2 = [...new Set(arr)]

const set = new Set(arr)
const has = set.has(2)

const set2 = new Set([2,3])
const set3 = new Set([...set].filter(item => set2.has(item)))
console.log(set3)
console.log(2 in set3)