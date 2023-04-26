require('dotenv').config();

const http = require('http');

const app = require('./app');

const mongoConnect = require('./services/mongo');

const PORT = process.env.PORT || 4000;

const server = http.createServer(app);

mongoConnect();

server.listen(PORT, () => {
	console.log(`Listening on port ${PORT}`);
});
