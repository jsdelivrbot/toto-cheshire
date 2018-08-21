var express = require('express');
var path = require('path');
var app = express();
var bodyParser = require('body-parser');
var cors = require('cors');
require('dotenv').config();

app.set('port', (process.env.PORT || 5000));
app.use(bodyParser.json());
app.use(cors());

app.listen(app.get('port'), function() {
	console.log('Node app is running on port', app.get('port'));
});

require('./matches.js')(app);
require('./bot.js')(app);

app.use(express.static(__dirname));
app.get('/privacy',function(req,res){
	res.sendFile(path.join(__dirname+'/privacy.html'));
});