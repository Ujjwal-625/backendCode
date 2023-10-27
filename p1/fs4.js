const fs=require ("fs");
function fun(path,ext){
    fs.readdir(path,(err,data)=>{
        if(data){
            data.forEach((ele)=>{
                if(ele.includes(".")){
                    let arr=ele.split(".");
                    if(arr[1]==ext){
                        fs.appendFile()
                    }
                }
            })
        }
    })
}
fun(".","js");