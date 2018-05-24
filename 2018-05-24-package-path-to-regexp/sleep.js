var Man = function (msg) {
  if (this instanceof Man) {
    this.time = 0;
    this.state = 'resolved';
    console.log(msg);
  } else{
    return new Man(msg);
  }
}

Man.prototype.eat = function (msg) {
  if (this.time === 0) {
    console.log('eat ' + msg);
  } else {
    setTimeout(() => {
      console.log(msg);
    }, this.time)
  }
  return this;
}

Man.prototype.sleep = function (second) {
  this.time += second * 1000;
  return this;
}

// Man.prototype.sleepFirst = function () {

// }




Man('hello').eat('pig').sleep(3).eat('meat');