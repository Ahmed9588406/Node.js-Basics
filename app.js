/*const tutorial = require("./tutorial")

console.log(tutorial)

console.log(tutorial.sum(1,1))
console.log(tutorial.PI)
console.log(new tutorial.SomeMathObject())
*/


const EventEmitter = require('events')

const eventemitter = new EventEmitter()

eventemitter.on('tutorial',(num1 , num2)=>{
    console.log(num1 + num2)
});

eventemitter.emit('tutorial',1,2)


class Person extends EventEmitter {
    constructor(name){
        super()
        this._name = name
    }

    get name(){
        return this._name
    }
}

let ahmed = new Person("ahmed");
let mo = new Person("mo");

ahmed.on("name",()=>{
    console.log("my name is " + ahmed.name)
})

mo.on("name",()=>{
    console.log("my name is " + mo.name)
})

// they emitted synchronously

ahmed.emit("name")
mo.emit("name")