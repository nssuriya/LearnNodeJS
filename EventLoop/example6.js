
// example 6
console.log("first line");
for(var i=1;i<=5;i++){
  setTimeout(function(){
    console.log("inside timeout "+i);
    },5000)
   console.log(i);
}
console.log("last "+i);