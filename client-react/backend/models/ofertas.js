const mongoose = require ('mongoose');
// const autoincrement= require('simple-mongoose-autoincrement')
const autoIncrement = require('mongoose-auto-increment');
const offertaSchema = mongoose.Schema({
    title: {
        type: String,
    },
    details: {
        type: String,
    }
});
// offertaSchema.plugin(autoincrement,{field: 'key', startAt: 0, })
const connection = mongoose.createConnection("mongodb+srv://joec:that1guy2@cluster0-tlgse.mongodb.net/restaurantes?retryWrites=true&w=majority");

autoIncrement.initialize(connection);

offertaSchema.plugin(autoIncrement.plugin, {
    model: 'ofertas',
    field: 'key',
    startAt: 0,
    incrementBy: 1
});

module.exports = mongoose.model('ofertas', offertaSchema);
