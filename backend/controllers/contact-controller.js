const Contact = require("../models/contact-model")

const ContactForm = async (req, res) => {
    try {
        const response = req.body
        await Contact.create(response)
        return res.status(200).send({ message: "Message sent successfuly" });
    } catch (error) {
        return res.status(500).send({ message: "Message not delievered" });
    }
}

module.exports = ContactForm