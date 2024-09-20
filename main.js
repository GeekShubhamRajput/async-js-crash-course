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


