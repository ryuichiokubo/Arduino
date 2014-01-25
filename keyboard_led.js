var j5 = require("johnny-five");
var myBoard, leds=[], ledPins = [2,3,4,5,6,7,8,9];

myBoard = new j5.Board();
myBoard.on("ready", function() {

  function allOn(){
    for (var i = 0; i < leds.length; i++) {
        leds[i].on();
    }
  } 

  function allOff(){
    for (var i = 0; i < leds.length; i++) {
        leds[i].off();
    }
  }

  // initialize LEDs using a for loop
  for (var i = 0; i < ledPins.length; i++){
      var myLed = new j5.Led(ledPins[i]);
      leds.push(myLed);
  }

  // toggle LED specified by input number
  toggleByNumber = function(data) {
    //console.log(typeof(data) + ' ' + data);
    num = parseInt(data, 10);
    if (typeof(num) === 'number' && leds[num]) {
      leds[num].toggle();
    }
  };

  process.stdin.on("data", toggleByNumber);

  allOn();
  board.wait(500, allOff);
});