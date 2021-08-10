const mongoose = require('mongoose');
const NotesSchema = new mongoose.Schema({

    userID: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
        required: true
    }

}, { timestamps: true });

const Notes = mongoose.model('Notes', NotesSchema);
module.exports = Notes;