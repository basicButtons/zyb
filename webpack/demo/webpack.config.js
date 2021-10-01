const path = require("path")
const webpack = require("webpack")
const HtmlWebpackPlugin = require("html-webpack-plugin")
module.exports={
    entry:{
        app:"./src/index.js",
        add:"./src/addcontent.js",
        loaderTest : "./src/some.js",
        vendor:["axios"]
    },
    output:{
        filename:'[name].js',
        path:path.join(__dirname,"dist"),
        publicPath:"/dist"
    },
    resolveLoader:{
        modules:[
            path.resolve(__dirname,"loaders"),
            "node_modules"
        ]
    },
    module:{
        rules:[
            {
                test:/\.css$/,
                use:["style-loader","css-loader"]
            },
            // {
            //     test:/title\.js$/,
            //     use:["pre-loader","inline-loader","normal-loader","post-loader"]
            // },
            // {
            //     test:/some\.js$/,
            //     use:[{
            //         loader:"test-loader",
            //         options:{
            //             name:"mx",
            //             age:21
            //         }
            //     }]
            // },
            {
                test:/\.(png|gif|jpg)$/,
                use:[{
                    loader : "my-file-loader",
                    options:{
                        module:false
                    }
                }],
            }
            // ,
            // {
            //     test:/title\.js$/,
            //     use:[],
            //     enforce:"pre"
            // },
            // {
            //     test:/title\.js$/,
            //     use:["post-loader"],
            //     enforce:"post"
            // }

            // 不写 enforce 的话，就是从右向左进行，然后我们可以使用 enforce 进行。
            // 运行顺序是 pre > normal > inline > post
        ]
    },
    plugins:[
        // new webpack.HotModuleReplacementPlugin()
        new HtmlWebpackPlugin({
            template:'./src/index.html'
        })
    ],
    mode:"development", 
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