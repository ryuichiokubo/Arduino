var j5 = require("johnny-five");
var myBoard, myLed;
var pin = 9;

myBoard = new j5.Board();

myBoard.on("ready", function() {

  myLed = new j5.Led(pin);

  myLed.strobe( 500 );

  // make myLED available as "led" in REPL

  this.repl.inject({
      led: myLed
  });

  // try "on", "off", "toggle", "strobe", "stop" (stops strobing)
});