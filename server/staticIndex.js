const http=require("http");
const fs=require("fs");
const server=http.createServer((req,res)=>{
        console.log(req.url);
        let filename="";
        if(req.url=="/" || req.url=="/index.html"){
            filename="index.html";
            
        }
        else{
            filename=req.url.substring(1);
            //res.end(Read(filename));
        }
        res.end(Read(filename));
        //res.end();
});
server.listen(3000,(e)=>{
    if(e){
        console.log("error occured in listening to the server");
    }
    else{
        console.log("started listening to port no. 3000");
    }
});
function Read(path){
    try{
        return fs.readFileSync(path,"utf-8");
    }catch(e){
        //console.log(e);
        return "";
    }
}
