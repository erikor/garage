var express = require('express');
var router = express.Router();
var isPi = /^arm/.test(process.arch);
var PIN = 23;
var CLICK_LENGTH = 500; 

if(isPi)
	var gpio = require("pi-gpio");

router.get('/', function(req, res) {
	if(isPi) {
		gpio.open(PIN, "output", function(err) {
		    gpio.write(PIN, 1, function() {  	  // click on     
		    	setTimeout(function() {
		    		gpio.write(PIN, 0, function() {  // click off
				        gpio.close(PIN); 
		    		});
				}, CLICK_LENGTH);  // click is 500 ms long
		    });
		});
	}
	res.send(process.platform);
});

module.exports = router;


