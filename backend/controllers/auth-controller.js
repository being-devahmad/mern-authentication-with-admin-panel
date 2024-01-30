const User = require("../models/user-model");
const bcrypt = require("bcryptjs");

// logic of res.send()
//home page
const home = async (req, res) => {
  try {
    res.status(200).send("Hello auth ");
  } catch (error) {
    console.log(error);
  }
};

// register page
const register = async (req, res) => {
  try {
    // const data = req.body;
    // console.log(data);
    // now we'll destructre data
    const { username, email, password } = req.body;
    const userExists = await User.findOne({ email });
    if (userExists) {
      res.status(400).send({ msg: "User already exists" });
    }

    // hash the password
    // const saltRound = 10;
    // const hashedPassword = await bcrypt.hash(password, saltRound);

    const userCreated = await User.create({
      username,
      email,
      password,
    });

    res.status(200).send({
      msg: "Registeration Successful",
      token: await userCreated.generateToken(),
      userid: userCreated._id.toString(),
    });
  } catch (error) {
    res.status(404).send({ msg: "Error 404" });
  }
};

// login page
const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    // check for the user exists or not
    const userExist = await User.findOne({ email });
    if (!userExist) {
      res.status(400).send({ msg: "User does not exist" });
    }
    // when password user enters matches with the pass in database

    const isMatch = await userExist.comparePassword(password);
    if (isMatch) {
      res.status(200).send({
        msg: "Login Successful",
        token: await userExist.generateToken(),
        userid: userExist._id.toString(),
      });
    } else {
      res.status(400).send({ msg: "Invalid email or password" });
    }
  } catch (error) {
    res.status(404).send({ msg: "Error 404" });
  }
};

module.exports = { home, register, login };
