
// import axios from "axios"
import write from "./addcontent"
if(module.hot){
    module.hot.accept()
}
// axios.get("http://localhost:3000/name").then(res=>{
//     console.log(res)
// })
write()

document.write("My first Webpack app. change something<br/>")
let count = 0
setInterval(()=>{
    count = count + 1
    logToHtml(count)
},1000)
function logToHtml(num){
    document.body.innerHTML = `content is ${num}!`
}
// addContent()