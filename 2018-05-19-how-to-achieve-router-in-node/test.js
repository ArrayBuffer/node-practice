var pathToRegexp = require('path-to-regexp');

var keys = []
var re = pathToRegexp('/foo/:bar', keys)

var res = re.exec('/foo/sad');
console.log(res)