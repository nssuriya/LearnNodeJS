console.log("The file is read");

exports.message="Hello from module";

exports.add = function(){
  console.log("inside add of the module");
};

// the scope of b belongs to this module and not exported.
var b = 100;

// global declaration
c = 1000;
