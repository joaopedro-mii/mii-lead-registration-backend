// backend/server.js
require('dotenv').config();

// backend/server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const formRoutes = require('./routes/formRoutes');

// Cria a aplicação Express
const app = express();

// Configuração do Middleware
app.use(express.json()); // Permite que o Express leia os dados no corpo da requisição como JSON
app.use(cors()); // Permite requisições de outros domínios

// Conectar ao MongoDB
mongoose.connect(process.env.MONGODB_URI, {
}).then(() => {
    console.log('Conectado ao MongoDB');
}).catch((err) => {
    console.error('Erro ao conectar ao MongoDB:', err);
});

// Definindo as rotas
app.use('/api', formRoutes);

// Iniciando o servidor
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
