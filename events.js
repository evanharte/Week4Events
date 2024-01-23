const EventEmitter = require("events");
class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();

myEmitter.on("batman", () => {
  console.log("a batman event occurred!");
});
myEmitter.on("batman", () => {
  console.log("another batman event occurred!");
});
myEmitter.addListener("batman", () => {
  console.log("a third batman event occurred!");
});
myEmitter.addListener("robin", () => {
  console.log("a robin event occurred!");
});

// getting the count / number of listeners for a particular event
console.log("batman count: " + myEmitter.listenerCount("batman"));
console.log("robin count: " + myEmitter.listenerCount("robin"));
console.log("events: " + myEmitter.eventNames());

// emitting the events
// emit is used to trigger the event
myEmitter.emit("batman");
myEmitter.emit("robin");
