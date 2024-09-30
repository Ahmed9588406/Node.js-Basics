/*const tutorial = require("./tutorial")

console.log(tutorial)

console.log(tutorial.sum(1,1))
console.log(tutorial.PI)
console.log(new tutorial.SomeMathObject())
*/


const EventEmitter = require('events')

const eventemitter = new EventEmitter()

eventemitter.on('tutorial',()=>{
    console.log("tutorial event has occured")
});

eventemitter.emit('tutorial')