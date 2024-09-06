Le projet utilise Node.js et Express pour le serveur, ainsi que Socket.io pour la communication en temps réel. Le projet comprend un dossier views pour le fichier index.ejs, un dossier public pour les fichiers chat.js et style.css. Voici la structure et les étapes.

Étapes pour créer un projet de chat simple avec Socket.io
Initialiser le projet Node.js :

Ouvrez votre terminal et créez un dossier pour votre projet.
bash
Copier le code
mkdir chat-app
cd chat-app
Initialisez un projet Node.js et installez les modules nécessaires (express et socket.io).
bash
Copier le code
npm init -y
npm install express socket.io
Créer la structure du projet : Créez les dossiers et fichiers suivants :

Dossier views : contiendra le fichier index.ejs pour la page HTML.
Dossier public : contiendra les fichiers chat.js pour le script côté client et sock.css pour les styles.
