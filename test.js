var outcast = require('./index');





// Comma
var str = 'test, news,something,   other ? ';
var arr = outcast.comma(str);

var result = outcast.remove(arr);
console.log(result);

