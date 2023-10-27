const EventEmitter=require("events");
// console.log(EventEmitter);
const event =new EventEmitter();
event.on("Reached",()=>{
    console.log("reached handled");
})
event.emit("Reached");
event.on("done",()=>{
    console.log("done handled");
})
function log(){
    console.log("inside log");
    event.emit("done");
}
// module.exports=log;
// module.exports.event=event;