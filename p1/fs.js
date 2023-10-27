const os=require("os");
// console.log(os);
// console.log(os.arch());
// console.log(os.cpus());
// console.log(os.totalmem());
// console.log(os.freemem());
const fs=require("fs");
// console.log(fs);
//synchronous
// const file=fs.readFileSync("./Node/p1/3.js","utf-8");
// console.log(file);
//asynchronous
// fs.readFile("./","UTF-8",(err,data)=>{
//     if(err){
//         console.log(err);
//     }else{
//         console.log(data);
//     }
// })
//read directory
// const dir=fs.readdirSync("./","utf-8");
// console.log(dir);

//writting a new file
// fs.writeFile("./Node/p1/Ujjwal.txt","hi my name is Ujjwal",(err,data)=>{
//     if(err)
//     console.log("error in doing");
// });
//updating the exixting file
fs.appendFile("./Node/p1/Ujjwal.txt"," I have updated this file",(err,data)=>{
    if(err)
    console.log(err);
})
