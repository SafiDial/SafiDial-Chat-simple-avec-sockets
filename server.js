const express = require('express');
const http = require('http');
const socketIo = require('socket.io'); // Assurez-vous d'importer socket.io

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    res.render('index'); // Render la vue EJS
});

app.use((req, res, next) => {
    res.setHeader('Content-Type', 'text/html');
    res.status(404).send('Page introuvable');
});

io.on('connection', (socket) => {
    console.log('Un utilisateur est connecté');

    socket.on('pseudo', (pseudo) => {
        console.log(`Nouvel utilisateur: ${pseudo}`);
        socket.pseudo = pseudo;
        socket.broadcast.emit('newUser', pseudo);
    });

    socket.on('message', (data) => {
        console.log(`Message reçu de ${data.pseudo}: ${data.message}`);
        io.emit('message', `${data.pseudo}: ${data.message}`); // Émet à tous les clients
    });

    socket.on('disconnect', () => {
        console.log('Un utilisateur est déconnecté');
    });
});

const PORT = 8080;

server.listen(PORT, () => {
    console.log(`Serveur démarré sur le port : ${PORT}`);
});
