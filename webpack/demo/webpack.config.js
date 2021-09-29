const path = require("path")
module.exports={
    entry:{
        app:"./src/index.js",
        add:"./src/addcontent.js",
        vendor:["axios"]
    },
    output:{
        filename:'[name].js',
        path:path.join(__dirname,"dist"),
        publicPath:"/dist"
    },
    module:{
        rules:[
            {
                test:/\.css$/,
                use:["style-loader","css-loader"]
            }
        ]
    },
    mode:"development", 
    devServer:{
        // publicPath:"/dist"
    }
}