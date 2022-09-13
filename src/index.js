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


const serverPort = process.env.PORT || 4000;
server.listen(serverPort, () => {
  console.log(`Server listening at https://localhost:${serverPort}`);
});


server.post('/card', (req, res) => {
  const newCard = { ...req.body };
  console.log(req)
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

    const url = process.env.NODE_ENV === 'production' ?'back-end-to-the-future.herokuapp.com' :'localhost:4000';

    finalCard.changes
      ?res.json({
        success: true,
        cardURL: `https://${url}/card/${finalCard.lastInsertRowid}`,
      }) 
      :res.json({
        success: false,
        errorMsg: 'Los datos no han sido guardados'
      });

  } else {
    return {
      success: false,
      error: 'Debes completar todos los campos',
    };
  }
});

server.get('/card/:id', (req, res) => {
  const query = db.prepare(`SELECT * FROM cards WHERE id=?`);
  const result = query.get(req.params.id);
  console.log(result)



  res.render('pages/card', result);
});


//Servidor de ficheros estáticos.
const staticServerPath = './src/public-react';
server.use(express.static(staticServerPath));

const cardStaticStyles = './src/public-css';
server.use(express.static(cardStaticStyles));


