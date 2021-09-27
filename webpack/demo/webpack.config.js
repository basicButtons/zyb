const path = require("path")
module.exports={
    entry:{
        app:"./src/index.js",
        add:"./src/addcontent.js",
        vendor:["axios"]
    },
    output:{
        filename:'[name].js',
        path:path.join(__dirname,"js"),
        publicPath:"/js"
    },
    mode:"development",
    devServer:{
        // publicPath:"/dist"
    }
}