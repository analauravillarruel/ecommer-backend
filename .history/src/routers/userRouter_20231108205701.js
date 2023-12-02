const express = require('express');
const UserDao = require("../DAOs/userDao");
const router = Router();

const usersService = new Users()


router.get('/', as (req, res) => {
  let users = await userModel.find();
  return users;
});

module.exports = userRouter;