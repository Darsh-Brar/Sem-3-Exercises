var fs = require('fs')
var file = '/home/ubuntu/workspace/labs_wmdd4935/Text.txt'

fs.readFile(file, function (error, contents) {
      if (error) throw error;
      var data=contents.toString();
     var lines = data.split('\n').length - 1
  console.log(lines)
})