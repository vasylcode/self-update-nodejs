const express = require('express');
const app = express();
const packageJson = require('./package.json');

app.get('/version', (req, res) => {
	res.set('Content-Type', 'text/plain');
	res.send(packageJson.version);
});

app.listen(3000);
