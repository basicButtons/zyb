function loader(content){
    console.log("inner-loader is running!")
    return content
}

loader.pitch = function (){
    console.log("inner-loader-pitch!")
}

module.exports = loader