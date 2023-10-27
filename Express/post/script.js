const express=require("express");
const path=require("path");
const app=express();
app.use(express.static("."));
app.use(express.urlencoded({extended:false}));
app.get("/getdata",(req,res)=>{
   console.log(req.query);
   res.send("welcome "+req.query.yourname);
//   res.end();
})
app.post("/getdata",(req,res)=>{
   console.log(req.body);
   res.send("welcome "+req.body.yourname);
   // res.end();
})
app.get("*",(req,res)=>{
    res.sendFile(path.join(__dirname,"./error.html"));
})
app.listen(3000,(err)=>{
 if(err){
    console.log("failed");
 }
 else{
    console.log("passed");
 }
}
)