// backend/models/Bars.js
const mongoose = require('mongoose');

const BarsSchema = new mongoose.Schema({
    nome: { type: String, required: true },
    descricao: { type: String, required: true },
    bebidas: { type: String, required: true },
    especialidadesDaCasa: { type: String, required: true },
    atracoesFrequentes: { type: String, required: true },
    horarioDeFuncionamento: { type: String, required: true },
    entregas: { type: String, required: true },
    endereco: { type: String, required: true },
    whatsapp: { type: String, required: true },
    instagram: { type: String, required: true },
    link: { type: String, required: true },
}, { timestamps: true });

module.exports = mongoose.model('Bars', BarsSchema);
