// JavaScript source code
const Livro = require('./livro-schema'); // Importa o modelo Livro

// Função para obter todos os livros
const obterLivros = async () => {
    return await Livro.find(); // Retorna todos os livros da coleção
};

// Função para incluir um novo livro
const incluir = async (livro) => {
    return await Livro.create(livro); // Adiciona um novo livro
};

// Função para excluir um livro pelo código (_id)
const excluir = async (codigo) => {
    return await Livro.deleteOne({ _id: codigo }); // Remove o livro pelo _id
};

// Exporta as funções
module.exports = {
    obterLivros,
    incluir,
    excluir,
};
