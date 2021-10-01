const { LoaderOptionsPlugin } = require("webpack")
const {getOptions} = require("loader-utils")

function loader(content){
    const options = getOptions(this)
    // 这里面的 this 就是 loader 执行的时候的执行上下文，其上有大量的属性，在我们自定loader的时候都会用到。
    console.log(options)
    console.log("this loader is running!")
    return content + "// test-loader"
}

// function PitchLoader(content){
//     console.log("this loader is running!")
//     return content + "// test-loader"
// }

loader.pitch = function (){
    console.log("test-loader-pitch!")
}

module.exports = loader