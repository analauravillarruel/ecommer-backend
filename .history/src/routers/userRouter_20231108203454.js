const express = require('express');
const router = express.Router();
const BaseRouter = require("./BaseRouter");
const UserDao = require("../DAOs/userDao");

router.get('/', (req, res) => {
  let
  res.json({ message: "Lista de contactos" });
});

module.exports = userRouter