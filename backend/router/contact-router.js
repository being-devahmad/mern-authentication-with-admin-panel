const express = require("express");
const router = express.Router();
const Contact = require("../controllers/contact-controller")

router.route("/contact").get(Contact);

module.exports = router;