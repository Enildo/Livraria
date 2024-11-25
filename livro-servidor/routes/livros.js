const express = require('express');
const router = express.Router();
const { obterLivros, incluir, excluir } = require('../modelo/livro-dao'); // Importa as funções do DAO

// Rota para obter todos os livros (GET)
router.get('/', async (req, res) => {
    try {
        const livros = await obterLivros();
        res.status(200).json(livros);
    } catch (err) {
        res.status(500).json({ erro: 'Erro ao obter livros', detalhes: err });
    }
});

// Rota para incluir um novo livro (POST)
router.post('/', async (req, res) => {
    try {
        const livro = await incluir(req.body);
        res.status(201).json({ mensagem: 'Livro incluído com sucesso', livro });
    } catch (err) {
        res.status(400).json({ erro: 'Erro ao incluir livro', detalhes: err });
    }
});

// Rota para excluir um livro (DELETE)
router.delete('/:id', async (req, res) => {
    try {
        const resultado = await excluir(req.params.id);
        if (resultado.deletedCount > 0) {
            res.status(200).json({ mensagem: 'Livro excluído com sucesso' });
        } else {
            res.status(404).json({ mensagem: 'Livro não encontrado' });
        }
    } catch (err) {
        res.status(400).json({ erro: 'Erro ao excluir livro', detalhes: err });
    }
});

// Exporta o router
module.exports = router;
// JavaScript source code
