// backend/models/Acais.js
const mongoose = require('mongoose');

const AcaisSchema = new mongoose.Schema({
    nome: { type: String, required: true },
    descricao: { type: String, required: true },
    itensDoMenu: { type: String, required: true },
    acompanhamentos: { type: String, required: true },
    destaquesEstabelecimento: { type: String, required: true },
    horarioDeFuncionamento: { type: String, required: true },
    entregas: { type: String, required: true },
    endereco: { type: String, required: true },
    whatsapp: { type: String, required: true },
    instagram: { type: String, required: true },
    link: { type: String, required: true },
}, { timestamps: true });

module.exports = mongoose.model('Acais', AcaisSchema);
