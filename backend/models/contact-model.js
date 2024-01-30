// const mongoose = require("mongoose");
const { Schema, model, default: mongoose } = require("mongoose")

const contactSchema = new Schema({
    email: {
        type: String,
        required: true,
    },
    message: {
        type: String,
        required: true,
    }
})

// create collection
const Contact = new model('Contact', contactSchema)
module.exports = Contact