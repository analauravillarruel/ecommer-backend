const express = require('express');
const UserDao = require("../DAOs/userDao");
const router = express.Router();

const UserServicesDataBase = new Users()


router.get('/users', async (req, res) => {
  const users = await UserDao.get(Al);
  return users;
});

module.exports = userRouter;