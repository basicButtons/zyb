const path = require("path")
module.exports = {
    entry:"./src/index.js",
    output:{
        filename:"[name].js"
    },
    mode:"development",
    module:{
        rules:[
            {
                test:/\.js$/,
                exclude:/node_modules/,
                use:[{
                    loader:"babel-loader"
                }]
            }
        ]
    },
    devServer:{
        // publicPath:"/dist"
        // hot:true
        // contentBase:"./dist"
        static:{
            // publicPath:"./dist",
            // serveIndex: true,
            directory:path.join(__dirname,"dist")
        },
        port:8087
    }   
}