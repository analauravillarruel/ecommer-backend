const express = require('express');
const UserDao = require("../DAOs/userDao");
const router = express.Router();

const UserServicesDataBase = new Users()


router.get('/', async (req, res) => {
  let users = await UserServicesDataBase.get();
  return users;
});

module.exports = userRouter;