const express = require('express');
const router = express.Router();
const UserDao = require("../DAOs/userDao");

router.get('/', (req, res) => {
  let users = await userModel.find();
  return users;
});

module.exports = userRouter;