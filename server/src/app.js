const express = require('express');

const app = express();

app.get('/', (req, res) => {
	return res.status(200).json({
		response: 'This is the response send by the server !',
	});
});

module.exports = app;
