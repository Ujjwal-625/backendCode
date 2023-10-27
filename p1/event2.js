// method 1 by creating an object
// const logger=require("./events1");
// logger.event.on("logger called",()=>{
//     console.log("log handled");
// })
// logger.log();
  
const Logger=require("./events1");
// console.log(logger);
const obj=new Logger();
// console.log(obj);
obj.on("Event class Created",()=>{
    console.log("event handeled");
})
obj.log();