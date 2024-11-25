const mongoose = require('mongoose');

const uri = 'mongodb://127.0.0.1:27017/livraria'; // Use o endere�o local

mongoose.connect(uri)
    .then(() => console.log('Conex�o com o MongoDB bem-sucedida!'))
    .catch((err) => {
        console.error('Erro ao conectar no MongoDB:', err);
    });

module.exports = mongoose;
