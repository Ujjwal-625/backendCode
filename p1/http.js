const http=require("http");
// const server=http.createServer();
// server.on("connection",(Socket)=>{
//     console.log("connected");
// });don't use this method 

const server=http.createServer((req,res)=>{
    // console.log(req.url);
    // console.log("hello");
    res.setHeader("content-type","text/html");
    res.write("welcome to node js\n");
    res.write("<h1>welcome to node js</h1>");
//    res.write("welcome to node js");
    res.end();
    // console.log("connected");
});
server.listen(3000);
