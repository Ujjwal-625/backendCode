const fs=require("fs");
function search(path,ext){
    fs.readdir(path,(err,files)=>{
        console.log(files);
        if(!err){
            files.forEach((ele)=>{
                if(ele.includes(".")){
                let arr=ele.split(".");
                // console.log(arr[1]+" = "+ext);
                if(arr[1]==ext){
                    console.log(arr[0]+ "."+arr[1]);
                    fs.readFile(path+"/"+arr[0]+"."+arr[1],(e,f)=>{
                        if(err){
                            fs.writeFile("./soltionFile",path+"/"+arr[0]+"."+arr[1]+"\n",(error,data)=>{if(error){
                                console.log("error in fswrite");
                            }});
                        }
                        else{
                            fs.appendFile("./soltionFile",path+"/"+arr[0]+"."+arr[1]+"\n",(error,data)=>{if(error){
                                console.log("error in fsAppend");
                            }})
                        }
                    })
                }
            search(path+"/"+arr[0]+"."+arr[1],ext);
                }
                else{
                    search(path+"/"+ele,ext);
                }
        });
        }
        
    })
}
search(".","js");