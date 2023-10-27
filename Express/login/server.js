const express=require("express");
const path=require("path");
const fs=require("fs");
const app=express();
const route=require("./src/route");
app.get("/",(req,res)=>{
    
    res.sendFile(path.join(__dirname,"pubic/index.html"));
})
app.use(express.static("pubic"));
app.use("/order",route);
app.use(express.urlencoded());
app.post("/loginPage",(req,res)=>{
    fs.readFile("user.json","utf-8",(err,data)=>{
        // console.log(data);
        let t=JSON.parse(data);
            let result=t.filter((ele)=>{
                if(ele.name==req.body.name && ele.password==req.body.password){
                    return true;
                }
            })
            if(result.length==0){
                        res.sendFile(path.join(__dirname,"/pubic/error.html"));
                    }
            else{
                res.send("welcome "+ req.body.name);
            }
})
//res.end();
})
app.post("/Signup",(req,res)=>{
    fs.readFile("user.json","utf-8",(err,data)=>{
        // let t=data;
        //console.log(t);
        var arr=JSON.parse(data);
        let p=arr.filter((ele)=>{
            return (ele.name==req.body.name && ele.password==req.body.password)
        })
        if(p.length==0){
           content={};
           content.name=req.body.name;
           content.password=req.body.password;
           arr.push(content);
            fs.writeFile("user.json",JSON.stringify(arr),(err)=>{
                if(err)
                console.log("Not updated")
                else
                console.log("updated");
            })
            res.send ("Username and password have been saved");
        }
        else{
            res.send("UserName and password exists try another one");
        }
    })
})
app.post("/deleteUser",(req,res)=>{
    fs.readFile("user.json","utf-8",(err,data)=>{
        // let t=data;
        //console.log(t);
        var arr=JSON.parse(data);
        let p=arr.filter((ele)=>{
            return (ele.name==req.body.name && ele.password==req.body.password)
        })
        if(p.length==0){
            res.send("There is No Such User");
        }
        else{
            arr=arr.filter((ele)=>{
                return (ele.name!=req.body.name || ele.password!=req.body.password);
            })
            // console.log(arr);
            fs.writeFile("user.json",JSON.stringify(arr),(err)=>{
                if(err)
                console.log("Not updated")
                else
                console.log("updated");
            })
            res.send("User Deleted");
        }
    })
})
app.listen(3000,(err)=>{
    if(err){
        console.log("failed to listen");
    }else{
        console.log("Started Listening......");
    }
})