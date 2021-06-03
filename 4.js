console.log(__dirname);
console.log(__filename);

const names = require('./3');

const sayHi = (first, second) =>{
	console.log(first + second);
}

sayHi(names.hello, names.name);
module.exports  = {sayHi};