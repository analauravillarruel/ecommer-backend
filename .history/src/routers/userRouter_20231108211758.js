const express = require('express');
const Use = require("../DAOs/userDao");
const router = express.Router();

const UserServicesDataBase = new Users()


router.get('/users', async (req, res) => {
  const users = await UserDao.getAll();
  return users;
});

module.exports = userRouter;