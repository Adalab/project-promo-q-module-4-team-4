
const express = require('express');
const cors = require('cors');
const { v4: uuidv4 } = require('uuid');

const server = express();
server.use(cors());

server.use(express.json({limit: '10mb'}));

const savedCard = [];

const serverPort = 4000;
server.listen(serverPort, () => {
    console.log(`Server listening at http://localhost:${serverPort}`);
});

//Servidor de ficheros estáticos.
const staticServerPath = './src/public-react'
server.use(express.static(staticServerPath));


server.post('/card', (req, res) => {
    const newCard = { id:uuidv4(), ...req.body }
    savedCard.push(newCard);

    const result = newCard.name && newCard.job && newCard.email && newCard.linkedin && newCard.github 
     ?{
        success: true,
        cardURL: `https://localhost:4000/card/${newCard.id}`
     }
     :{
        success: false,
        error: 'Debes completar todos los campos'
     };

    res.json(result);
});

server.get('/card/:id', (req, res) => {
    res.json({
        url: 'https://awesome-profile-cards.herokuapp.com/card/93271662377002269'
    });
});




