const express = require('express');
const router = express.Router();
const Livro = require('../modelo/livro-schema'); // Importar o modelo Livro

// Rota para listar todos os livros
router.get('/livros', async (req, res) => {
    try {
        const livros = await Livro.find();
        res.json(livros);
    } catch (err) {
        res.status(500).send(err);
    }
});

// Rota para criar um novo livro
router.post('/livros', async (req, res) => {
    try {
        const livro = new Livro(req.body);
        const resultado = await livro.save();
        res.status(201).json(resultado);
    } catch (err) {
        res.status(400).send(err);
    }
});

module.exports = router;
