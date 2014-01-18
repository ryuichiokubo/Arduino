/**
 * Sample script to blink LED 13
 */
console.log('blink start ...');
var pin = 13;
var firmata = require('firmata');
var board = new firmata.Board('/dev/tty.usbserial-A601VT1A', function(err) {
  var bite;
  board.pinMode(pin, board.MODES.OUTPUT);
  function loop() {
    board.digitalWrite(pin, (bite ^= 0x01));
  }
  setInterval(loop, 500);
});