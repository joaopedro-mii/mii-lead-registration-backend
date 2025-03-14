// backend/models/Arenas.js
const mongoose = require('mongoose');

const ArenasSchema = new mongoose.Schema({
    nome: { type: String, required: true },
    descricao: { type: String, required: true },
    atividades: { type: String, required: true },
    horarioDeFuncionamento: { type: String, required: true },
    endereco: { type: String, required: true },
    whatsapp: { type: String, required: true },
    instagram: { type: String, required: true },
    link: { type: String, required: true },
}, { timestamps: true });

module.exports = mongoose.model('Arenas', ArenasSchema);
