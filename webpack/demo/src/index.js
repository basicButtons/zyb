
import axios from "axios"


axios.get("http://localhost:3000/name").then(res=>{
    console.log(res)
})

import("./addcontent.js").then(({write})=>{
    console.log("!23123")
    console.log(write)
    write()
})
document.write("My first Webpack app. change something<br/>")
// addContent()