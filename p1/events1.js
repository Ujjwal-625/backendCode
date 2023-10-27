const EventEmitter=require("events");

//method 1 of handling event from diffrenent module is by exporting same object
// const event =new EventEmitter();
// function log(){
//     console.log("inside log");
//     event.emit("logger called");
// }
// module.exports.log=log;
// module.exports.event=event;
//this whole obove is method 1;

// method 2 is by inhritence of class
class Event extends EventEmitter{
    log(){
        console.log("log method called");
        this.emit("Event class Created");
    }
}
module.exports=Event;
