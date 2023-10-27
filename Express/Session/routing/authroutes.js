const express=require("express");
// const app=express();
const router=express.Router();
const path=require("path");
router.get("/dashboard",(req,res)=>{
    res.sendFile(path.join(__dirname,"../public/dashboard.html"));
})
router.get("/profile",(req,res)=>{
    res.send("Profile Page")
})
router.get("/logout",(req,res)=>{
    req.session.destroy();
    res.redirect("/");
})
router.get("/changepassword",(req,res)=>{
    res.send("Change Password page")
})
module.exports=router;