const express=require("express");
const app =express();
const router=express.Router();
const path=require("path");
router.get("/profile",(req,res)=>{
    res.send("Admin Profile");
})
router.get("/changePassword",(req,res)=>{
    res.send("Admin Change Password");
})
module.exports =router;