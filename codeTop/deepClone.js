const deepClone = function(obj,map = new WeakMap()){
    if(typeof obj !== "object"){
        return {}
    }
    if(map.has(obj)) return map.get(obj)
    let res = Array.isArray(obj) ? [] : {}
    map.set(obj,res)
    Object.keys(obj).forEach(key => {
        if(typeof obj[key] === "object"){
            res[key] = deepClone(obj[key],map)
        }
        else{
            res[key] = obj[key]
        }
    })
    return res
}