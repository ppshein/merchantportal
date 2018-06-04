//This is still work in progress
/*
Please report any bugs to nicomwaks@gmail.com

i have added console.log on line 48 




 */
'use strict'

const express = require('express')
const bodyParser = require('body-parser')
const request = require('request')
const app = express()

app.set('port', (process.env.PORT || 5000))

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: false}))

// parse application/json
app.use(bodyParser.json())

// index
app.post('/callback', function (req, res) {
	res.send(JSON.stringify(req));
})

app.use(express.static(__dirname + '/appg'));
// Here's the new code:
app.use('/*', function(req, res){
	res.sendFile(__dirname + '/app/index.html');
});

// spin spin sugar
app.listen(app.get('port'), function() {
	console.log('running on port', app.get('port'))
})
