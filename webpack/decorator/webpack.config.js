module.exports = {
    entry:"./index.js",
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
    }
    
}