function loader(content){
    console.log("post-loader is running!")
    return content
}
loader.pitch = function (){
    console.log("post-loader-pitch!")
}
module.exports = loader