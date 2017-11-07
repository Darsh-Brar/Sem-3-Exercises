const fs = require('fs');
const data = fs.readFileSync('/home/ubuntu/workspace/labs_wmdd4935/Text.txt');
console.log(data.toString().split('\n').length - 1)