function loader(content){
    console.log("normal-loader is running!")
    return content
}
loader.pitch = function (){
    console.log("normal-loader-pitch!")
}
module.exports = loader