//example 7
const fs = require('fs');

function someAsyncOperation(callback) {
    // io 
  fs.readFile('./sample.txt', callback);
}

const timeoutScheduled = Date.now();

setTimeout(() => {
  const delay = Date.now() - timeoutScheduled;

  console.log(`${delay}ms have passed since I was scheduled`);
}, 100);

someAsyncOperation(function(){
  const startCallback = Date.now();

  while (Date.now() - startCallback < 500) {

}
});