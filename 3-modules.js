//CommonJS- every file is module (by default)
//Modules - Encapsulates code (only share minimum)
const names = require("./4-names"); // Specify the correct file extension
const sayHi = require("./5-utils");
const data = require("./6-alternative-flavor");
require("./7-mind-grenade");
console.log(data);

sayHi(names.a);
sayHi(names.b);
sayHi("navneet");
