const pathToregExp = require('./note');

let list = [];
let path = '/order/:oid/';
console.log(pathToregExp(path, list));
console.log(list);