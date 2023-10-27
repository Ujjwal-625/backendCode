const fs=require("fs");
const http=require("http");
function add(path){
    return fs.readFileSync(path,"utf-8");
}
const server=http.createServer((req,res)=>{
    if(res.url=="/fs.js"){
        res.write(add("./fs.js"));
    }
    res.end();
})
server.listen("3000");