const fs=require("fs");
function search(path){
    fs.readdir(path,(err,files)=>{
        if(!err){
        files.forEach((ele)=>{
            console.log(path+"/"+ele)
            search(path+"/"+ele);
        })
    }
    });
}
search("."); 