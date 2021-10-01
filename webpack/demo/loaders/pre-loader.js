function loader(content){
    console.log("pre-loader is running!")
    return content
}
loader.pitch = function (){
    console.log("pre-loader-pitch!")
}
module.exports = loader