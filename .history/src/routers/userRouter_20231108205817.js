const express = require('express');
const UserDao = require("../DAOs/userDao");
const router = express.Router();

const UserService = new Users()


router.get('/', async (req, res) => {
  let users = await userModel.find();
  return users;
});

module.exports = userRouter;