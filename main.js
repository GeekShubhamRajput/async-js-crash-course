// Async JS - what and why?
// In its most basic form, JS is synchronous, blocking, single threaded language.
function A(){
  console.log('Function A')
}

function B(){
  console.log('Function B')
}

A()
B()

// Timeouts and Intervals
// setTimeout(function, duration, params1, params2..)

function greet(){
  console.log('Hello')
}
setTimeout(greet, 3000)

function greetings(username){
  console.log('Hello ' + username)
}
setTimeout(greetings, 3000, 'Shubham')

// clearTimeout(timeoutId)
// To clear a timeout
function greeting(username){
  console.log('Hello ' + username)
}
const timeoutId = setTimeout(greeting, 3000, 'Abhishek')
clearTimeout(timeoutId) // Nothing is logged in console

// setInterval(function, duration, params1, params2..)
// It repeatedly runs the code over and over again at regular intervals.

setInterval(greeting, 4000, 'John')

// clearInterval(intervalID)
const intervalId = setInterval(greeting, 4000, 'John')
clearInterval(intervalId) 

// Callbacks
// Any function that is passed as an argument to another function is called callback function in JS.
// The function which accepts a function as an argument or returns a function is called a higher order function.
// Twi type of callback - Synchronous callback and Asynchronous callback

function greet(username){
  console.log('Hello ' + username)
}

function greeting1(greetFn){
  const name = 'Shubham'
  greetFn(name)
}

greeting1(greet)

// Synchronous callback
// a callback which is executed immediately is called a synchronous callback.

function greet(name){
  console.log("Welcome " + name)
}

function greeting(nameFn){
  const name = 'Vishwas'
  nameFn(name)
}

greeting(greet);

// Asynchronous Callback
// An asynchronous callback is callback that is often used to continue or resume
// code execution after an asynchronous operation has completed.

// These callbacks are used to delay the execution of a function until a particular time or event has occured

function greet(name){
  console.log('Hello ' + name)
}

setTimeout(greet, 2000, 'Richard')

// Promise
// A promise is simply an object in JS.
// Which has one of the three states:
// 1. pending: initial state, neither fulfilled nor rejected.
// 2. fulfilled: meaning that the operation completed successfully.
// 3. rejected: meaning that the operation failed.

// How to create a promise
const promise = new Promise()

// How to fulfilled or reject the promise?
const promise = new Promise((resolve, reject) => {
})

// when changes status from pending to fulfilled
const promise = new Promise((resolve, reject) => {
  resolve()
})

// when changes status from pending to rejected
const promise = new Promise((resolve, reject) => {
  reject()
})

// Chaining Promises
const promise = new Promise((resolve, reject) => {
  resolve() or reject()
})
promise.then(onFulfilment).catch(onRejection)

// Promise static methods
// 1. Promise.all()
const promise1 = Promise.resolve(3);
const promise2 = 25;
const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 3000, 'test');
});

Promise.all([promise1, promise2, promise3]).then((values) => {
  console.log(values); // [ 3, 25, 'test' ]
});

// 2. Promise.allSettled()
const promise1 = Promise.resolve(2);
const promise2 = 23;
const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 2000, 'test');
})

Promise.allSettled([promise1, promise2, promise3]).then((values) => {
  console.log(values);
})
// [
//   { status: 'fulfilled', value: 2 },
//   { status: 'fulfilled', value: 23 },
//   { status: 'fulfilled', value: 'test' }
// ]

// 3. Promise.race();
const promise1 = new Promise((resolve, reject) => {
  setTimeout(resolve, 500, 'one');
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, 'two');
});

Promise.race([promise1, promise2]).then((value) => {
  console.log(value);
});

// async await
// async keyword - returns a Promise.
// await keyword - pause execution till the Promise is resolved or rejected. 
async function greet(){ return Promise.resolve('Hello Shubham') }
greet().then((value) => { console.log(value) })

// Sequential vs concurrent vs parallel execution
// Sequential execution
function resolveHello(){
  return new Promise(resolve => {
    setTimeout(function (){
      resolve('Hello')
    }, 2000)
  })
}

function resolveWorld(){
  return new Promise(resolve => {
    setTimeout(function (){
      resolve('World')
    }, 1000 )
  })
}

async function sequentialStart(){
  const hello = await resolveHello();
  console.log(hello); // logs after 2 seconds 

  const world = await resolveWorld();
  console.log(world) // Logs after 1 seconnd
}
sequentialStart(); // Logs 'Hello World', Total time taken 2 + 1 = 3 seconds

// Concurrent Execution 
async function concurrentStart(){
  const hello = resolveHello();
  const world = resolveWorld();

  console.log(await hello); // Logs after 2 seconds
  console.log(await world); // Logs after 2 seconds
}
concurrentStart(); // Logs 'Hello World', Totalb time taken = 2 seconds

// Parallel Execution
async function parallelStart(){
  Promise.all([
    (async () => console.log(await resolveHello()))(), // Logs after 2 seonds
    (async () => console.log(await resolveWorld()))()  // Logs aftr 1 second  
  ])
}
parallelStart(); // Logs 'World' 'Hello', Total time taken = 2 seconds
