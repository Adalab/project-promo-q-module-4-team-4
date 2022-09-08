const express = require('express');
const cors = require('cors');
const { v4: uuidv4 } = require('uuid');

const server = express();
server.use(cors());

server.use(express.json({ limit: '10mb' }));

server.set('view engine', 'ejs');

const savedCard = [];

const serverPort = process.env.PORT || 4000;
server.listen(serverPort, () => {
  console.log(`Server listening at http://localhost:${serverPort}`);
});

server.post('/card', (req, res) => {
  const newCard = { id: uuidv4(), ...req.body };
  savedCard.push(newCard);

  console.log(newCard);
  console.log(savedCard);
  const result =
    newCard.name &&
    newCard.job &&
    newCard.email &&
    newCard.linkedin &&
    newCard.github
      ? {
          success: true,
          cardURL: `http://localhost:4000/card/${newCard.id}`,
        }
      : {
          success: false,
          error: 'Debes completar todos los campos',
        };

  res.json(result);
});

server.get('/card/:id', (req, res) => {
  // res.json({
  //     url: 'https://awesome-profile-cards.herokuapp.com/card/93271662377002269'
  // });
  console.log(req.params);
  const result = savedCard.find((item) => item.id === req.params.id);

  console.log(typeof savedCard[0].id);
  res.render('pages/card', result);
});

//Servidor de ficheros estáticos.
const staticServerPath = './src/public-react';
server.use(express.static(staticServerPath));

const cardStaticStyles = './src/public-css';
server.use(express.static(cardStaticStyles));
