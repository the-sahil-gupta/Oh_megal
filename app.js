const express = require('express');
const app = express();
const path = require('path');

app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const http = require('http');
const server = http.createServer(app);
const socket = require('socket.io');
const io = socket(server);

io.on('connection', function (socket) {
	console.log(socket.id);
});

app.get('/', (req, res) => {
	res.render('index');
});

server.listen(3000, () => {
	console.log('Server is running on http://localhost:3000 ');
});
