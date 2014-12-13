var numbers = process.argv.slice(2);
var result = Math.min(...numbers);
console.log(`The minimum of [${numbers}] is ${result}`);