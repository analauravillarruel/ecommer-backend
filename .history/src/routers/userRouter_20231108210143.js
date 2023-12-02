const express = require('express');
const UserDao = require("../DAOs/userDao");
const router = express.Router();

const userServicesDataBase = new Users()


router.get('/', async (req, res) => {
  let users = await userServicesDataBase.get();
  return users;
});

module.exports = userRouter;