const express=require("express");
const path=require("path");
const fs=require("fs");
 const router=express.Router();
 router.get("/",(req,res)=>{
    res.send("base file");
 })
 router.get("/details",(req,res)=>{
    res.send("/details");
 })
 router.get("/details:id/:to",(req,res)=>{
    console.log(req.params.id);
    console.log(req.params.to);
    res.send("details:id");
 })
 router.get("/details/past",(req,res)=>{
res.send("details/past");
 })
 module.exports=router;