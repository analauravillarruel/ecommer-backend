const express = require('express');
const UserDao = require("../DAOs/userDao");
const router = Router();

const UsersService = new Users()


router.get('/', (req, res) => {
  let users = await userModel.find();
  return users;
});

module.exports = userRouter;