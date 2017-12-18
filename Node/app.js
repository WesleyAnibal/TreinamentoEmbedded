const express = require('express'); // importando o express
const bodyParser = require('body-parser');

const app = express(); // iniciando o express

app.use(bodyParser.json());

app.use('/', require('./routes/index.js'))// enviando a responsabilidade pra outro arquivo, pra melhorar a modularização


app.listen(8000); //criando a porta