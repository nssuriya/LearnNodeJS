const fs = require('fs');
data = `Hello data`;
fs.appendFile("test.txt", data, function(err) {
    if(err) {
        return console.log(err);
    }
    console.log("The file was saved!");
}); 


