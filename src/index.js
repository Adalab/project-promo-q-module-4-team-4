const express = require('express');
const cors = require('cors');
const { v4: uuidv4 } = require('uuid');

const Database = require('better-sqlite3');
const db = new Database('./src/db/database.db', {
  verbose: console.log,
});

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
  const newCard = { ...req.body };
  // savedCard.push(newCard);

  console.log(newCard);
  // console.log(savedCard);

  if (
    newCard.name &&
    newCard.job &&
    newCard.email &&
    newCard.linkedin &&
    newCard.github
  ) {
    const query = db.prepare(
      'INSERT INTO  cards ( palette, name, job, phone, email, linkedin, github, photo) VALUES (?,?,?,?,?,?,?,?)'
    );
    const finalCard = query.run(
      newCard.palette,
      newCard.name,
      newCard.job,
      newCard.phone,
      newCard.email,
      newCard.linkedin,
      newCard.github,
      newCard.photo
    );

    const result = {
      success: true,
      cardURL: `http://localhost:4000/card/${finalCard.lastInsertRowid}`,
    };
    console.log(finalCard);
    return res.json(result);
  } else {
    return {
      success: false,
      error: 'Debes completar todos los campos',
    };
  }
});

server.get('/card/:id', (req, res) => {
  // res.json({
  //     url: 'https://awesome-profile-cards.herokuapp.com/card/93271662377002269'
  // });
  //   console.log(req.params);
  //   const result = savedCard.find((item) => item.id === req.params.id);
  const query = db.prepare(`SELECT * FROM cards WHERE id=?`);
  const result = query.get(req.params.id);

  res.render('pages/card', result);
});

//Servidor de ficheros estáticos.
const staticServerPath = './src/public-react';
server.use(express.static(staticServerPath));

const cardStaticStyles = './src/public-css';
server.use(express.static(cardStaticStyles));
