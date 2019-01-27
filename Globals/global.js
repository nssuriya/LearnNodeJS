// here are some of the samples for global objects

console.log("console is also a global object");

console.log(Date());


setTimeout(function(){
    console.log("After 2 Seconds");
    },2000)

// The top-level scope is not the global scope; 
// var something inside a Node.js module will be local to that module.

// These objects are available in all modules. 
// The following variables may appear to be global but are not. 
// They exist only in the scope of modules

console.log(__dirname);

console.log(__filename);



