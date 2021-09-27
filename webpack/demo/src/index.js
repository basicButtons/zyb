import addContent from "./addcontent"
import axios from "axios"


axios.get("http://localhost:3000/name").then(res=>{
    console.log(res)
})

document.write("My first Webpack app. change something<br/>")
addContent()