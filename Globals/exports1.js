// try running the below commented line
// console.log(c);
var example=require('./module1')

 console.log("hi");

// the exported variables are stored in example object
 console.log(example.message);

 // undefined
 console.log(example.b);

 // available since delcared as global
 console.log(c);

 example.add();
