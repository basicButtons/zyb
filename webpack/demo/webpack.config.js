const path = require("path")
const webpack = require("webpack")
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
    module:{
        rules:[
            {
                test:/\.css$/,
                use:["style-loader","css-loader"]
            }
        ]
    },
    plugins:[
        // new webpack.HotModuleReplacementPlugin()
    ],
    mode:"development", 
    devServer:{
        // publicPath:"/dist"
        // hot:true
    }
}