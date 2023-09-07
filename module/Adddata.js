const database = require('../db/connection');
const addtaskschema = new database.Schema({
    name: {
        type: String,
        lowercase: true,
        trim: true
    },
    email: {
        type: String,
        lowercase: true,
        trim: true
    },
    phone: {
        type: Number,
        trim: true
    },
    title: {
        type: String,
        lowercase: true,
        trim: true
    },
    description: {
        type: String,
        lowercase: true,
        trim: true
    }
}, { timestamps: true })


const addtaskmodel = database.model('addtask', addtaskschema)
module.exports = addtaskmodel;