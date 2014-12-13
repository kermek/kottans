var inputs = process.argv.slice(2);
var result = inputs.map(s => s[0])
                   .reduce((s, a) => s + a, "");
console.log(`[${inputs}] becomes "${result}"`);