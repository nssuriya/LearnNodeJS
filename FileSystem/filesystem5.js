const fs = require('fs');

// deletes the file 
fs.unlink("test.txt",function(err) {
    if(err) {
        return console.log(err);
    }
    console.log("The file was deleted!");
}); 