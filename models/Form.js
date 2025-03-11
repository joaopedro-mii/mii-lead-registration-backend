// backend/models/Formulario.js
const mongoose = require('mongoose');

const FormSchema = new mongoose.Schema({
    categoria: { type: String, required: true }, // Ex: "pousadas", "restaurantes"
    dados: { type: mongoose.Schema.Types.Mixed, required: true }, // Dados dinâmicos
}, { timestamps: true });

module.exports = mongoose.model('Form', FormSchema);