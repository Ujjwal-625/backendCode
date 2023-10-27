const fs=require("fs");
const http=require("http");
const server=http.createServer((req,res)=>{
   // console.log(req.url);
    res.setHeader("content-type","text/html");
    console.log(req.url);
    if(req.url=="/" || req.url=="/index.html"){
        fs.readFile("index.html","utf-8",(e,d)=>{
            if(!e){
                //console.log(d);
                res.end(d);
            }
            else{
                console.log("wrong url");
                res.end();
            }
        })
    }
    else if(req.url=="/contact.html"){
        fs.readFile("contact.html","utf-8",(e,d)=>{
            if(!e){
               // console.log(d);
                res.end(d);
            }
            else{
                console.log("wrong url");
                res.end();
            }
        })
    }
    else if(req.url=="/about.html"){
        fs.readFile("about.html","utf-8",(e,d)=>{
            if(!e){
                // console.log(d);
                res.end(d);
            }
            else{
                console.log("wrong url");
                res.end();
            }
        })
    }
    else if(req.url=="/style.css"){
        fs.readFile("style.css","utf-8",(e,d)=>{
            if(!e){
                // console.log(d);
                res.end(d);
            }
            else{
                console.log("wrong url");
                res.end();
            }
        })
    }
    else if(req.url=="/script.js"){
        fs.readFile("script.js","utf-8",(e,d)=>{
            if(!e){
                // console.log(d);
                res.end(d);
            }
            else{
                console.log("wrong url");
                res.end();
            }
        })
    }
})
server.listen(3000,(err)=>{
    if(err){
        console.log("Not listening");
    }
    else{
        console.log("Started Listening");
    }
})