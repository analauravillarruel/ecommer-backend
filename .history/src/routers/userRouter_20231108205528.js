const express = require('express');
const UserDao = require("../DAOs/userDao");
const router = Router();
const UsersService = 


router.get('/', (req, res) => {
  let users = await userModel.find();
  return users;
});

module.exports = userRouter;