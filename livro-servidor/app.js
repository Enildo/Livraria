const express = require('express');
const cors = require('cors'); // Importar CORS

const app = express(); // Criar a inst�ncia do Express

// Configurar middlewares
app.use(cors()); // Habilitar CORS
app.use(express.json()); // Habilitar o parsing de JSON nas requisi��es

// Importar as rotas
const livroRouter = require('./routes/livros');

// Configurar rotas
app.use('/livros', livroRouter);

// Exportar o aplicativo para ser usado em `bin/www`
module.exports = app;
