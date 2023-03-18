// Events Module

// Node.js has a built-in module called 'Event'. Where we can create, fire and listen for our own events.
// Example 1 - Registring for the event to be fired only one time using once.
// Example 2 - Create an event emitter instance and register a couple of callbacks
// Example 3 - Registering for the events with callback parameters

const EventEmitter =  require('events') // ---------------------->> Here we are passing class not module therefore we are using Pascal naming Convention for variable name
const event = new EventEmitter();


//event.on('sayMyName', () => {   //--------------->> Always define the event before firing(emmiting) it
//    console.log('My name is Areeb')
//})

//event.on('sayMyName', () => {
//    console.log('My last name is Ahmad');
//})

//event.emit('sayMyName');    //------------------->> Firing(emmiting) the event


event.on('checkPage', (sc, msg) =>{
    console.log(`status code is ${sc} and the page is ${msg}`)
})
event.emit('checkPage', 200, 'ok');

