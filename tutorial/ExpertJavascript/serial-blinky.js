var serial = require("serialport"),
    raddress = /usb|acm|com/i,
    pin = 13;
serial.list(function(err, result) {
  console.log("err=" + err);
  var read = new Buffer(0),
      address, addresses, port, bite;
  if (result.length) {
    addresses = result.filter(function(val) {
      // Match only address that Arduino cares about
      // ttyUSB#, cu.usbmodem#, COM#
      if (raddress.test(val.comName)) {
        return val;
      }
    }).map(function(val) {
      return val.comName;
    });
    address = addresses[1];
    console.log("addresses: " + addresses);
    port = new serial.SerialPort(address, {
      baudrate: 57600,
      buffersize: 1
    });
    port.on("open", function() {
      console.log("opened");
      var bite;
      function loop() {
        port.write([pin, (bite ^= 0x01)]);
      }
      setInterval(loop, 500);
    });
  } else {
    console.log("No valid port found");
  }
});
