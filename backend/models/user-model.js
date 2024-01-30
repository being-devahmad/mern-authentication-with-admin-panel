const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    isAdmin: {
        type: Boolean,
        default: false,
    },
});

// jwt
// methods -> an instance method that is used to create functions hat can be acessed in any way , e.g in my case i've created generateToken() fun and used it in auth-controller.js
userSchema.methods.generateToken = async function () {
    try {
        return jwt.sign(
            {
                userid: this._id.toString(),
                email: this.email,
                isAdmin: this.isAdmin,
            },
            process.env.JWT_SELECT_KEY,
            {
                expiresIn: "30d",
            }
        );
    } catch (error) { }
};

// secure pssword using bcryptjs
userSchema.pre("save", async function (next) {
    //   console.log("pre-method", this);
    const user = this;
    if (!user.isModified("password")) {
        next();
    }
    try {
        const saltRound = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(user.password, saltRound);
        user.password = hashedPassword;
    } catch (error) {
        next(error);
    }
});

// compare password
userSchema.methods.comparePassword = async function (password) {
    return await bcrypt.compare(password, this.password);
};

// define the model or collection name
const User = new mongoose.model("User", userSchema);
module.exports = User;
