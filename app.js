const express = require('express');
const app = express();

const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use((req, res, next) => {
	res.header("Access-Control-Allow-Origin", "*");
	res.header(
		"Access-Control-Allow-Headers", 
		"*"
	);
	if(req.method == 'OPTIONS') {
		res.header('Access-Control-Allow-Methods', 'GET, POST, DELETE');
		return res.status(200).json({});
	}
	next();
});

// const agents = require('./api/routes/agentsRoutes')
// app.use('/agents', agents);

app.get('**', function (req, res) {
    res.send('Sorry, this is an invalid URL...');
});
module.exports = app;