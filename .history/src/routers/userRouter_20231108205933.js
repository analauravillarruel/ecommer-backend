const express = require('express');
const UserDao = require("../DAOs/userDao");
const router = express.Router();

const UsersService = new Users()


router.get('/', async (req, res) => {
  let users = await userServic.find();
  return users;
});

module.exports = userRouter;