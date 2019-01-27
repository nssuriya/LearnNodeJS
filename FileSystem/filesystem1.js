/*
Common use for the File System module:

Read files
Create files
Update files
Delete files
Rename files

*/

/*
fs.appendFile()
fs.open()
fs.writeFile()
fs.unlink()
fs.rename()
*/


var fs = require('fs');

// io operation with call back
fs.readFile('demo.txt', "utf8",function(err,data){
 console.log("file is read");
 console.log(data);
});