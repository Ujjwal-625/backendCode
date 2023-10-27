const express= require("express");
const path=require("path");
// console.log(express);
const app = express();
//now we will be using a middleware to render any other file in our folder
app.use(express.static("."));
app.get("/",(req,res)=>{
    res.send("in root directory");
}) 
app.get("/index.html",(req,res)=>{
    res.sendFile(path.join(__dirname,"/index.html"));
    
})
app.get("*",(req,res)=>{
    console.log("else");
    // res.end("write correct url");
    res.status(404).sendFile(path.join(__dirname,"./error.html"));
})
app.listen(3000,(err)=>{
    if(err){
        console.log("not listening");
    }
    else{
        console.log("Started Listening");
    }
})