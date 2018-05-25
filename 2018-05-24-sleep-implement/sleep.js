var CodingMan = function (msg) {
  console.log(msg);
  return {
    time: 0,
    eat: function (msg) {
      if (this.time === 0) {
        console.log('EAT: ' + msg);
      } else {
        setTimeout (function () {
          this.time = 0;
          console.log('EAT: ' + msg);
        }, this.time)
      }
      return this;
    },
    sleep: function (s) {
      this.time += s * 1000;
      return this;
    }
  }
}