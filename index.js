const express = require('express');
const app = express();
const axios = require('axios');

app.get('/version', (req, res) => {
	const repository = 'vasylcode/self-update-nodejs';
	axios
		.get(`https://raw.githubusercontent.com/${repository}/main/package.json`)
		.then((response) => {
			res.set('Content-Type', 'text/plain');
			res.send(response.data.version);
		})
		.catch((error) => {
			console.log(`Error: ${error.message}`);
			res.send({ error });
		});
});

app.listen(3000);
