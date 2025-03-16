// backend/routes/formRoutes.js
const express = require('express');
const Pousadas = require('../models/Pousadas');
const Restaurants = require('../models/Restaurants');
const GroupHouses = require('../models/GroupHouses');
const Bars = require('../models/Bars');
const Pizzarias = require('../models/Pizzarias');
const Espetinhos = require('../models/Espetinhos');
const Acais = require('../models/Acais');
const Deliverys = require('../models/Deliverys');
const EscolasKitesurf = require('../models/EscolasKitesurf');
const Academias = require('../models/Academias');
const Arenas = require('../models/Arenas');
const PersonalTrainer = require('../models/PersonalTrainer');
const Clinicas = require('../models/Clinicas');
const Farmacias = require('../models/Farmacias');
const Massagem = require('../models/Massagem');
const router = express.Router();

// Função para obter o modelo correspondente à categoria
const getCategoryModel = (categoria) => {
    switch (categoria) {
        case 'pousadas':
            return Pousadas;
        case 'restaurantes':
            return Restaurants;
        case 'casasGrupo':
            return GroupHouses;
        case 'bares':
            return Bars;
        case 'pizzarias':
            return Pizzarias;
        case 'espetinhos':
            return Espetinhos;
        case 'acais':
            return Acais;
        case 'deliverys':
            return Deliverys;
        case 'kiteSchools':
            return EscolasKitesurf;
        case 'academias':
            return Academias;
        case 'arenas':
            return Arenas;
        case 'personal':
            return PersonalTrainer;
        case 'farmacias':
            return Farmacias;
        case 'clinicas':
            return Clinicas;
        case 'massagem':
            return Massagem;
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
