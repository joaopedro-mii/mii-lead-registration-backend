// backend/routes/formularioRoutes.js
const express = require('express');
const Pousadas = require('../models/Pousadas');
const Restaurants = require('../models/Restaurants');
const router = express.Router();

// Função para obter o modelo correspondente à categoria
const getCategoryModel = (categoria) => {
    switch (categoria) {
        case 'pousadas':
            return Pousadas;
        case 'restaurantes':
            return Restaurants;
        default:
            return null;
    }
};

// Rota para receber os dados do formulário
router.post('/send-form', async (req, res) => {
    try {
        const { categoria, ...dados } = req.body;

        // Obtém o modelo correspondente à categoria
        const Model = getCategoryModel(categoria);
        if (!Model) {
            return res.status(400).json({ mensagem: 'Categoria inválida.' });
        }

        // Cria um novo documento com base no modelo da categoria
        const newForm = new Model(dados);
        await newForm.save();

        res.status(201).json({ mensagem: 'Dados salvos com sucesso!' });
    } catch (error) {
        console.error('Erro ao salvar os dados:', error);
        res.status(500).json({ mensagem: 'Erro ao salvar os dados.' });
    }
});

module.exports = router;
