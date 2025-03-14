// backend/models/Espetinhos.js
const mongoose = require('mongoose');

const EspetinhosSchema = new mongoose.Schema({
    nome: { type: String, required: true },
    descricao: { type: String, required: true },
    espetinhos: { type: String, required: true },
    acompanhamentos: { type: String, required: true },
    atracoesFrequentes: { type: String, required: true },
    horarioDeFuncionamento: { type: String, required: true },
    entregas: { type: String, required: true },
    endereco: { type: String, required: true },
    whatsapp: { type: String, required: true },
    instagram: { type: String, required: true },
    link: { type: String, required: true },
}, { timestamps: true });

module.exports = mongoose.model('Espetinhos', EspetinhosSchema);
