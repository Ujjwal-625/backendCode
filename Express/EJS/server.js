const express=require("express");
const app= express();
const path=require("path");
const fs=require("fs");
const authroutes=require("./routing/authroutes");
const cookieParser=require("cookie-parser");
app.use(cookieParser());
const expressSession=require("express-session");
const time=60*60*24*1000;//1 day time of the session
app.set("view engine","ejs");
app.use(expressSession({
    saveUninitialized:true,
    secret:"asdjfkl89$$",
    resave:false,
    cookie:{maxAge:time}
}))
app.get("/",(req,res)=>{
    res.render("index",{message:""});
})
app.get("/login",(req,res)=>{
    if(req.session.UserName){
        res.render("dashboard",{name:req.session.UserName});
        res.end();
    }
    fs.readFile("./public/user.json","utf-8",(err,data)=>{
        const arr=JSON.parse(data);
        let flag=true;
        arr.forEach((ele)=>{
            if(ele.UserName==req.query.UserName && ele.Password==req.query.Password){
                req.session.UserName=ele.UserName;
                // const uname=ele.UserName;
                res.render("dashboard",{name:req.session.UserName});
                flag=false;
                return;
            }
        })
        if(flag){
            res.render("index",{message:"Invalid User or Password"});
        }
    })
})
app.get("/logout",(req,res)=>{
    req.session.destroy();
    res.render("index",{message:"Logout Sucessfully"});
})
app.use(express.static("public"));
app.listen (3001,(err)=>{
    if(err){
        console.log("could not listen to the given port number\n");
    }else{
        console.log("Started Listening to the given port number");
    }
})