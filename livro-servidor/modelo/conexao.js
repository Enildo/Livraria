const mongoose = require('mongoose');

const uri = 'mongodb://127.0.0.1:27017/livraria'; // Use o endereço local

mongoose.connect(uri)
    .then(() => console.log('Conexão com o MongoDB bem-sucedida!'))
    .catch((err) => {
        console.error('Erro ao conectar no MongoDB:', err);
    });

module.exports = mongoose;
