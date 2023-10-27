const fs=require("fs");
// var arr=[];
fs.readdir("./Node/p1/files","utf-8",(err,data)=>{
    if(err)
    console.log(err);
    else{
        // arr=data;
        // console.log(arr);
        var ext=".txt";
        data.forEach((ele)=>{
            // console.log(ele.split('.'));
            var arr=ele.split(".");
            if(arr[1]=="txt"){
                // console.log(arr[0]);
                // console.log(arr[1]);
                fs.readFile("./Node/p1/sol.txt",(err,data)=>{
                    if(err){
                fs.writeFile("./Node/p1/sol.txt", "",(err,data)=>{
                    if(err){
                        console.log("error");
                    }
                    else{
                        fs.appendFile("./Node/p1/sol.txt", arr[0]+" ",(err,data)=>{
                            if(err){
                                console.log("error");
                            }
                        })
                    }
                })
            }
            else{
                fs.appendFile("./Node/p1/sol.txt", arr[0]+" ",(err,data)=>{
                    if(err){
                        console.log("error");
                    }
                })
            }
            })
            }
        })
       
    }
})
// console.log(arr);
