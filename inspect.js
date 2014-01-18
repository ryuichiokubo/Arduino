var j5 = require("johnny-five");

var target = {};

var props = {
  board: ["id", "pins", "type", "port"],
  led: ['id', 'pin', 'value']
};

var board = new j5.Board();

target.board = board;

board.on("ready", function() {

  var led = new j5.Led(9);

  target.led = led;

  for (var type in props) {
    props[type].forEach(function(val) {
      console.log(type + '.' + val + ": ", target[type][val]);
    });
  }

  this.repl.inject({
    led: led
  });

});