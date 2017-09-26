
var Sum=0;

for (var a = 2; a < process.argv.length; a++) {
  Sum += Number(process.argv[a]);
}

console.log(Sum);