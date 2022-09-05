const express = require('express');
const cors = require('cors');

const server = express();
server.use(cors());

server.use(express.json());

const serverPort = 4000;
server.listen(serverPort, () => {
    console.log(`Server listening at http://localhost:${serverPort}`);
});

server.post('/card', (req, res) => {
    const response = {
        success: true,
        cardURL:  'https://awesome-profile-cards.herokuapp.com/card/93271662377002269'
    };
    res.json(response);
});

server.get('/card/:id', (req, res) => {
    res.json({
        url: 'https://awesome-profile-cards.herokuapp.com/card/93271662377002269'
    });
});



