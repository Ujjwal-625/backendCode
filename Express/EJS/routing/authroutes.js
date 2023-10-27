const express =require ("express");
const router =express.Router();
router.get("profile",(req,res)=>{
    res.send ("User Profile\n");
})
router.get("changePassword",(req,res)=>{
    res.send("Change Password");
})
module.exports=router;