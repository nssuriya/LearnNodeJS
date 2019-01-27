var fs = require('fs');
var readline = require('readline');

// Example on readline event of file system.
// line event,close event etc
// Will be explained in detail on events


var myInterface = readline.createInterface({
  input: fs.createReadStream('demo.txt')
});
console.log("hello");
var lineno = 0;
myInterface.on('line', function (line) {
  lineno++;
  console.log('Line number ' + lineno + ': ' + line);
});
// setTimeout(function(){
//     console.log("inside timeout " + ab);
// },1)
// console.log("hello   5");
myInterface.on('close', function (line) {
  console.log(lineno);
});
