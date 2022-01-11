const express = require('express');
const http = require('http');
const path = require('path');
const { Server } = require('socket.io');
const { engine } = require('express-handlebars');
const config = require('./config');

const app = express();
const server = http.createServer(app);
const io = new Server(server);

app.engine('.hbs', engine({extname: '.hbs'}));
app.set('view engine', '.hbs');
app.set('views', './views');

app.use('/static', express.static(path.join(__dirname, 'static')));

let count = 0;
let displayCount = count;

setInterval(() => {
	if (displayCount !== count) {
		displayCount = count;
		io.emit('count', displayCount);
	}
}, 500);

io.on('connection', (socket) => {
	count ++;

	socket.on('disconnect', () => {
		count--;
	})
});

server.listen(config.port, () => {
	let addr = server.address()
	console.log(`Listening on ${addr.address}:${addr.port}`);
});

app.use((req, res, next) => {
	req.visitorCount = displayCount;

	next();
});

app.use(require('./routes'))