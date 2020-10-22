var SerialPort = require('serialport');
const Readline = SerialPort.parsers.Readline;
const port = new SerialPort('/dev/tty.usbmodem1411');
const parser = new Readline();


var weightOut = 0;
var output = 0;
var lastWeight = 0;
var hasChanged = false;
var intialSet = false;

port.pipe(parser);
parser.on('data', function(input) {
	weightOut = input;
    output = parseFloat(input);
    if (lastWeight != output) {
    	if (intialSet) {
    		if (lastWeight+1 <= output) {
    			console.log("has changed");
    			hasChanged = true;
    		}
    	} else {
    		intialSet = true;
    	}
    	lastWeight = output;
    } 
    console.log(output);
});

port.write('ROBOT PLEASE RESPOND\n');

var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var cors = require('cors')
 
app.use(cors())
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json())


app.get('/', function (req, res) {
	console.log("received request");
	res.send(weightOut);});

app.get('/update', function (req, res) {
	if (hasChanged) {
		console.log("received poll: has changed")
		res.status(200);
		res.send()
		hasChanged = false;
	} else {
		console.log("received poll: hasn't changed")
		res.status(201)
		res.send();
	}
});

app.listen(3333);