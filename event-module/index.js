//Events Module
//Nodejs has a build in module called Events
//where you can create fire and listen for your own events

//ex:1= Registering for the event to be fired only one time using once
//ex:2= Create an event emitter instance and register a couple of callbacks
//ex:3= Registering for the event with callback parameters

const { ok } = require('assert');
const EventEmitter = require('events');
const event = new EventEmitter(); 

//created and event and calling it
// event.on('sayMyName', () => {
//     console.log("your name is Dhaval.");
// });
// event.emit('sayMyName');

//calling multiple function with one event
// event.on('sayMyName', () => {
//     console.log("your name is Dhaval.");
// });

// event.on('sayMyName', () => {
//     console.log("your name is Dhaval1.");
// });

// event.on('sayMyName', () => {
//     console.log("your name is Dhaval2.");
// });
// event.emit('sayMyName');

//event calling and passing network check 
event.on('checkpage', (sc, msg) => {
    console.log(`status code is ${sc} and the page is ${msg}`);
});
event.emit('checkpage',200, "ok");


//emitte objects emit named events that cause previously registered listneres to be called so an emitter object basicallly has two main features
//emitting name events
//Registering and unregistering listners functions