const {getOptions,interpolateName} = require("loader-utils")
function loader(content){
    const options = getOptions(this) || {}
    let filename = interpolateName(this,options.filename,{content:content})
    console.log(filename,"<===")

    // 将文件 copy 至指定的目录。
    this.emitFile(filename,content)

    // 最终返回一个 buffer 或者字符串直接给 compiler 使用。
    return `module.exports=${JSON.stringify(filename)}`
}

loader.raw = true

module.exports = loader