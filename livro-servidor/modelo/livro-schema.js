// JavaScript source code
const banco = require('./conexao'); // Importa a conex�o com o MongoDB

// Defini��o do esquema Livro
const LivroSchema = banco.Schema({
    titulo: { type: String, required: true },
    codEditora: { type: Number, required: true },
    resumo: { type: String, required: true },
    autores: [{ type: String, required: true }],
});

// Associar LivroSchema � cole��o 'livros' e criar o modelo
const Livro = banco.model('Livro', LivroSchema);

// Exportar o modelo Livro
module.exports = Livro;
