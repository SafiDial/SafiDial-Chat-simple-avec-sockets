const socket = io.connect('http://localhost:8080');

let pseudo;
while (!pseudo) {
    pseudo = prompt('Quel est ton nom?');
}

socket.emit('pseudo', pseudo);
console.log('Pseudo envoyé au serveur:', pseudo);

document.title = pseudo + ' - ' + document.title;

socket.on('newUser', (pseudo) => {
    console.log('Événement newUser reçu:', pseudo);
    createElementFunction('newUser', pseudo);
});

socket.on('message', (message) => {
    console.log('Événement message reçu:', message);
    createElementFunction('message', message);
});

function createElementFunction(element, content) {
    console.log('Création d’un nouvel élément:', element, content);
    const newElement = document.createElement('div');

    switch (element) {
        case 'newUser':
            newElement.classList.add('newUser');
            newElement.textContent = content + ' a rejoint le chat';
            document.getElementById('msgContainer').appendChild(newElement);
            break;
        case 'message':
            newElement.classList.add('message');
            newElement.textContent = content;
            document.getElementById('msgContainer').appendChild(newElement);
            break;
    }
}

document.getElementById('chatForm').addEventListener('submit', (event) => {
    event.preventDefault();
    const input = document.getElementById('msgInput');
    const message = input.value.trim();

    if (message) {
        socket.emit('message', { pseudo, message });
        input.value = '';
    }
});
