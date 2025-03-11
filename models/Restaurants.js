// backend/models/Restaurantes.js
const mongoose = require('mongoose');

const RestaurantsSchema = new mongoose.Schema({
    nome: { type: String, required: true },
    email: { type: String, required: true },
    mensagem: { type: String, required: true },
    tipo: { type: String, required: true }, // Exemplo: tipo de comida
}, { timestamps: true });

module.exports = mongoose.model('Restaurants', RestaurantsSchema);
