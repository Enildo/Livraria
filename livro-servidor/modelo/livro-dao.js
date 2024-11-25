// JavaScript source code
const Livro = require('./livro-schema'); // Importa o modelo Livro

// Fun��o para obter todos os livros
const obterLivros = async () => {
    return await Livro.find(); // Retorna todos os livros da cole��o
};

// Fun��o para incluir um novo livro
const incluir = async (livro) => {
    return await Livro.create(livro); // Adiciona um novo livro
};

// Fun��o para excluir um livro pelo c�digo (_id)
const excluir = async (codigo) => {
    return await Livro.deleteOne({ _id: codigo }); // Remove o livro pelo _id
};

// Exporta as fun��es
module.exports = {
    obterLivros,
    incluir,
    excluir,
};
