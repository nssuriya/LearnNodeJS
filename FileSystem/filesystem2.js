var fs = require('fs');

// try running the below commented line.
// const data = fs.readFile('demo.txt', "utf8")

// read file sync method for synchronous file read
const data = fs.readFileSync('demo.txt', "utf8");
console.log(data);