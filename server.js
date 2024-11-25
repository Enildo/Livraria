// JavaScript source code
const express = require('express');
const mongoose = require('mongoose');

const app = express();

// Middleware para analisar JSON
app.use(express.json());

// Conexão com o MongoDB
mongoose.connect('mongodb://localhost:27017/livraria', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log('Conectado ao MongoDB');
}).catch((err) => {
    console.error('Erro ao conectar ao MongoDB:', err);
});

// Definição do modelo para a coleção "livros"
const livroSchema = new mongoose.Schema({
    titulo: String,
    autor: String,
    ano: Number,
    genero: String,
});

const Livro = mongoose.model('Livro', livroSchema);

// Rota para criar um novo livro
app.post('/livros', async (req, res) => {
    try {
        const livro = new Livro(req.body);
        const resultado = await livro.save();
        res.status(201).send(resultado);
    } catch (err) {
        res.status(400).send(err);
    }
});

// Rota para listar todos os livros
app.get('/livros', async (req, res) => {
    try {
        const livros = await Livro.find();
        res.send(livros);
    } catch (err) {
        res.status(500).send(err);
    }
});

// Configurar o servidor para ouvir na porta 3000
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
